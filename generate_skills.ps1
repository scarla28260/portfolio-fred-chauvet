$outputFile = "c:\CodeIA\projects\portfolio\skills.md"
$skillDirs = @("C:\CodeIA\.agent\skills", "C:\CodeIA\superpowers\skills")

$markdownContent = "# Project Skills`n`nThis document integrates all the skills from ``C:\CodeIA\.agent`` and ``C:\CodeIA\superpowers``.`n`n"

foreach ($dir in $skillDirs) {
    if (Test-Path $dir) {
        $markdownContent += "## Skills from $dir`n`n"
        
        # Get all files, excluding things that are clearly not skills
        $items = Get-ChildItem -Path $dir -Recurse -File | Where-Object { 
            $_.Name -eq "SKILL.md" -or 
            ($_.Extension -eq "" -and $_.DirectoryName -eq $dir) -or 
            ($_.Extension -eq ".md" -and $_.DirectoryName -eq $dir)
        }
        
        # Deduplicate by name just in case
        $processedNames = @{}

        foreach ($file in $items) {
            try {
                $content = Get-Content $file.FullName -Raw -ErrorAction Stop
                
                # Basic frontmatter parser
                $name = ""
                $desc = ""
                
                if ($content -match '(?s)^---\r?\n(.*?)\r?\n---') {
                    $frontmatter = $matches[1]
                    
                    if ($frontmatter -match '(?m)^name:\s*(.+)$') {
                        $name = $matches[1].Trim() -replace '^["'']|["'']$', ''
                    } 
                    
                    if ($frontmatter -match '(?s)(?m)^description:\s*(.+?)(?=\r?\n\w+:|$)') {
                        $desc = $matches[1].Trim() -replace '^["'']|["'']$', ''
                        $desc = $desc -replace '\r?\n', ' '
                    }
                }
                
                if (-not $name) {
                    $name = $file.BaseName
                }
                
                if (-not $processedNames.ContainsKey($name)) {
                    $processedNames[$name] = $true
                    $markdownContent += "### $name`n"
                    $markdownContent += "- **Source**: ``$($file.FullName)```n"
                    if ($desc) {
                        $markdownContent += "- **Description**: $desc`n"
                    }
                    $markdownContent += "`n"
                }
            } catch {
                # ignore
            }
        }
    }
}

Set-Content -Path $outputFile -Value $markdownContent -Encoding UTF8
