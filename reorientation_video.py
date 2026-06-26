import numpy as np
from manim import *

class ReorientationStory(Scene):
    def construct(self):
        # Colors
        sky_blue = "#BAE6FD"      # Sky Blue 200
        royal_blue = "#2563EB"    # Royal Blue
        dark_blue = "#0F172A"     # Dark Slate/Navy for text/outlines
        white = "#0F172A"         # Map white to dark slate/navy for text/outlines
        white_bg = "#FFFFFF"      # White background base
        real_white = "#FFFFFF"    # Real white for glows/sun/rays
        gold = "#C9A84C"
        red = "#FF4500"
        green_color = "#059669"
        skin_tone = "#FFDBAC"

        
        # Helper to create background with subtle white tech grid
        def create_bg(color1, color2):
            bg_rect = Rectangle(width=16, height=9)
            bg_rect.set_fill(color=[color1, color2], opacity=1)
            bg_rect.set_stroke(width=0)
            
            # Subtle white grid for texture
            grid = VGroup()
            for x in np.arange(-8, 8, 1):
                line = Line([x, -4.5, 0], [x, 4.5, 0], color=white, stroke_opacity=0.08, stroke_width=1)
                grid.add(line)
            for y in np.arange(-4.5, 4.5, 1):
                line = Line([-8, y, 0], [8, y, 0], color=white, stroke_opacity=0.08, stroke_width=1)
                grid.add(line)
                
            return VGroup(bg_rect, grid)
            
        # ----------------------------------------------------
        # SCENE 1: PROLOGUE (0 - 10s)
        # ----------------------------------------------------
        bg1 = create_bg(sky_blue, royal_blue)
        self.add(bg1)
        
        # Character Definition
        head = Circle(radius=0.4, color=white, fill_color=skin_tone, fill_opacity=1, stroke_width=2)
        body = RoundedRectangle(width=0.8, height=1.2, corner_radius=0.3, color=white, fill_color=royal_blue, fill_opacity=1, stroke_width=2)
        body.next_to(head, DOWN, buff=0.1)
        
        # Left arm bent in pain
        left_shoulder = body.get_left() + UP*0.2
        left_elbow = left_shoulder + LEFT*0.4 + DOWN*0.2
        left_hand = left_elbow + RIGHT*0.3 + UP*0.3
        left_arm = VMobject(color=white, stroke_width=6)
        left_arm.set_points_as_corners([left_shoulder, left_elbow, left_hand])
        
        # Right arm holding the left elbow
        right_shoulder = body.get_right() + UP*0.2
        right_hand = left_elbow
        right_arm = VMobject(color=white, stroke_width=6)
        right_arm.set_points_as_corners([right_shoulder, right_hand])
        
        legs = VGroup(
            Line(body.get_bottom() + LEFT*0.2, body.get_bottom() + LEFT*0.2 + DOWN*0.8, color=white, stroke_width=8),
            Line(body.get_bottom() + RIGHT*0.2, body.get_bottom() + RIGHT*0.2 + DOWN*0.8, color=white, stroke_width=8)
        )
        
        character = VGroup(body, head, left_arm, right_arm, legs)
        character.move_to(ORIGIN + LEFT*2)
        
        # Decorative white circles/pulses in the background
        bg_decor1 = VGroup(
            Circle(radius=1.5, color=white, stroke_opacity=0.15, stroke_width=2).move_to(LEFT*2),
            Circle(radius=2.5, color=white, stroke_opacity=0.08, stroke_width=1.5).move_to(LEFT*2)
        )
        self.add(bg_decor1)
        
        self.play(FadeIn(character, shift=RIGHT), run_time=2)
        
        # Red/orange & white pain sparks at left elbow
        sparks = VGroup()
        for i, angle in enumerate(np.linspace(0, 2*PI, 12, endpoint=False)):
            start = left_elbow + np.array([0.15*np.cos(angle), 0.15*np.sin(angle), 0])
            end = left_elbow + np.array([0.4*np.cos(angle), 0.4*np.sin(angle), 0])
            # Alternate between red and white sparks
            spark_color = red if i % 2 == 0 else white
            spark = Line(start, end, color=spark_color, stroke_width=3)
            sparks.add(spark)
            
        self.play(
            Create(sparks),
            Flash(left_elbow, color=white, flash_radius=0.6),
            run_time=2
        )
        self.play(FadeOut(sparks), run_time=0.5)
        
        # Add text
        text1 = Text("Une blessure qui a tout changé", font_size=32, color=white)
        text1.next_to(character, RIGHT, buff=1)
        self.play(Write(text1), run_time=2)
        
        self.wait(3.5) # Total 10s
        
        # ----------------------------------------------------
        # SCENE 2: LE LABYRINTHE ADMINISTRATIF (10 - 25s)
        # ----------------------------------------------------
        bg2 = create_bg(sky_blue, white_bg)
        
        # Labyrinth line overlays in white/sky_blue
        lab_lines = VGroup(
            Line([-7, 2, 0], [-3, 2, 0], color=white, stroke_opacity=0.2),
            Line([-3, 2, 0], [-3, -2, 0], color=white, stroke_opacity=0.2),
            Line([3, 2, 0], [7, 2, 0], color=white, stroke_opacity=0.2),
            Line([3, 2, 0], [3, -2, 0], color=white, stroke_opacity=0.2)
        )
        
        self.play(
            FadeIn(bg2), 
            FadeIn(lab_lines),
            FadeOut(text1), 
            FadeOut(bg_decor1),
            run_time=1.5
        )
        
        # Make character neutral / looking lost
        left_arm_neutral = Line(body.get_left() + UP*0.2, body.get_left() + DOWN*0.6, color=white, stroke_width=6)
        right_arm_neutral = Line(body.get_right() + UP*0.2, body.get_right() + DOWN*0.6, color=white, stroke_width=6)
        
        lost_character = VGroup(body, head, left_arm_neutral, right_arm_neutral, legs)
        lost_character.move_to(ORIGIN)
        
        self.play(
            Transform(character, lost_character),
            run_time=1.5
        )
        
        # Administrative doors appearing around him with white trim & white door handles
        doors = VGroup()
        doors_text = VGroup()
        door_details = VGroup()
        
        door_coords = [LEFT*4 + UP*1.5, LEFT*4 + DOWN*1.5, RIGHT*4 + UP*1.5, RIGHT*4 + DOWN*1.5]
        for coord in door_coords:
            door = Rectangle(width=1.5, height=2.2, color=white, fill_color=dark_blue, fill_opacity=0.8, stroke_width=3)
            door.move_to(coord)
            doors.add(door)
            
            # White door handle
            handle = Dot(point=coord + RIGHT*0.5 + DOWN*0.1, radius=0.08, color=white)
            door_details.add(handle)
            
            t = Text("BUREAU", font_size=14, color=white).move_to(coord).shift(DOWN*0.3)
            doors_text.add(t)
            
        self.play(
            AnimationGroup(
                AnimationGroup(*[FadeIn(d) for d in doors]),
                AnimationGroup(*[FadeIn(h) for h in door_details]),
                AnimationGroup(*[Write(t) for t in doors_text]),
                lag_ratio=0.2
            ),
            run_time=3
        )
        
        # Redirection arrows pointing
        arrows = VGroup()
        arrow_targets = [doors[0], doors[2], doors[3], doors[1]]
        for i in range(len(doors)):
            arrow = CurvedArrow(lost_character.get_center(), arrow_targets[i].get_center(), color=white, angle=TAU/8) # White arrows
            arrows.add(arrow)
            
        self.play(
            AnimationGroup(*[Create(a) for a in arrows], lag_ratio=0.3),
            run_time=3
        )
        
        text2 = Text("L'administration m'a fait tourner en rond", font_size=28, color=white).to_edge(DOWN, buff=1.4)
        self.play(Write(text2), run_time=2)
        
        self.wait(4) # Total 15s (cumulative 25s)
        
        # ----------------------------------------------------
        # SCENE 3: LA RÉVÉLATION (25 - 40s)
        # ----------------------------------------------------
        bg3 = create_bg(sky_blue, royal_blue)
        self.play(
            FadeIn(bg3),
            FadeOut(doors),
            FadeOut(door_details),
            FadeOut(doors_text),
            FadeOut(arrows),
            FadeOut(lab_lines),
            FadeOut(text2),
            run_time=1.5
        )
        
        # Joyful pose for character
        left_arm_joy = Line(body.get_left() + UP*0.2, body.get_left() + UP*0.6 + LEFT*0.6, color=white, stroke_width=6)
        right_arm_joy = Line(body.get_right() + UP*0.2, body.get_right() + UP*0.6 + RIGHT*0.6, color=white, stroke_width=6)
        joy_character = VGroup(body, head, left_arm_joy, right_arm_joy, legs)
        joy_character.move_to(ORIGIN + DOWN*1.5)
        
        self.play(
            Transform(character, joy_character),
            run_time=1.5
        )
        
        # Glowing white tech icons appearing (shifted up to prevent subtitle overlap)
        # 1. Laptop icon
        laptop_screen = RoundedRectangle(width=2, height=1.2, corner_radius=0.1, color=white, fill_color=white, fill_opacity=0.15, stroke_width=3)
        laptop_base = Line(LEFT*1.2 + DOWN*0.6, RIGHT*1.2 + DOWN*0.6, color=white, stroke_width=6)
        laptop = VGroup(laptop_screen, laptop_base).scale(0.8).move_to(UP*2.2 + LEFT*3)
        
        # 2. Code brackets
        brackets = Text("< / >", font_size=42, color=white).move_to(UP*2.2)
        
        # 3. Circuit diagram
        circ1 = Circle(radius=0.2, color=white, fill_color=white, fill_opacity=0.3, stroke_width=3)
        circ2 = Circle(radius=0.2, color=white, fill_color=white, fill_opacity=0.3, stroke_width=3).next_to(circ1, RIGHT*2)
        circ3 = Circle(radius=0.2, color=white, fill_color=white, fill_opacity=0.3, stroke_width=3).next_to(circ1, DOWN*1.5)
        l1 = Line(circ1.get_right(), circ2.get_left(), color=white, stroke_width=3)
        l2 = Line(circ1.get_bottom(), circ3.get_top(), color=white, stroke_width=3)
        circuit = VGroup(circ1, circ2, circ3, l1, l2).scale(0.8).move_to(UP*2.2 + RIGHT*3)
        
        tech_icons = VGroup(laptop, brackets, circuit)
        
        # Background white light rays (revelation)
        ray1 = Line(ORIGIN + DOWN*1.5, UP*3 + LEFT*5, color=real_white, stroke_opacity=0.1, stroke_width=2)
        ray2 = Line(ORIGIN + DOWN*1.5, UP*4, color=real_white, stroke_opacity=0.1, stroke_width=2)
        ray3 = Line(ORIGIN + DOWN*1.5, UP*3 + RIGHT*5, color=real_white, stroke_opacity=0.1, stroke_width=2)
        rays = VGroup(ray1, ray2, ray3)
        
        self.play(
            FadeIn(rays),
            AnimationGroup(*[FadeIn(icon, scale=0.8) for icon in tech_icons], lag_ratio=0.3),
            run_time=3
        )
        
        # Gold/White light flashes/sparks
        flash_anims = [Flash(icon.get_center(), color=white, flash_radius=0.8) for icon in tech_icons]
        color_anims = [icon.animate.set_color(white) for icon in tech_icons]
        self.play(
            *flash_anims,
            *color_anims,
            run_time=2
        )
        
        text3 = Text("Mais j'ai découvert ma vraie passion : la tech", font_size=28, color=white).to_edge(DOWN, buff=1.4)
        self.play(Write(text3), run_time=2)
        
        self.wait(5) # Total 15s (cumulative 40s)
        
        # ----------------------------------------------------
        # SCENE 4: L'AUTO-FORMATION (40 - 70s)
        # ----------------------------------------------------
        bg4 = create_bg(royal_blue, white_bg)
        
        # Background floating white bits (0s and 1s representing data)
        binary_elements = VGroup(
            Text("0", font_size=16, color=white, fill_opacity=0.15).move_to(LEFT*6 + UP*2),
            Text("1", font_size=16, color=white, fill_opacity=0.15).move_to(LEFT*5 + DOWN*2),
            Text("1", font_size=16, color=white, fill_opacity=0.15).move_to(RIGHT*6 + UP*3),
            Text("0", font_size=16, color=white, fill_opacity=0.15).move_to(RIGHT*3 + UP*2.5),
            Text("1", font_size=16, color=white, fill_opacity=0.15).move_to(RIGHT*5.5 + DOWN*2)
        )
        
        self.play(
            FadeIn(bg4),
            FadeIn(binary_elements),
            FadeOut(tech_icons),
            FadeOut(rays),
            FadeOut(text3),
            run_time=1.5
        )
        
        # Character sitting and coding pose
        seated_body = RoundedRectangle(width=0.8, height=1.2, corner_radius=0.3, color=white, fill_color=royal_blue, fill_opacity=1, stroke_width=2)
        seated_body.move_to(LEFT*2.5 + DOWN*0.5)
        seated_head = Circle(radius=0.4, color=white, fill_color=skin_tone, fill_opacity=1, stroke_width=2).next_to(seated_body, UP, buff=0.1)
        
        # Sitting chair and desk
        desk = Line(LEFT*4 + DOWN*1.1, RIGHT*1 + DOWN*1.1, color=white, stroke_width=4)
        chair = VGroup(
            Line(LEFT*3.3 + DOWN*1.1, LEFT*3.3 + DOWN*2, color=white, stroke_width=3),
            Line(LEFT*2.3 + DOWN*1.1, LEFT*2.3 + DOWN*2, color=white, stroke_width=3),
            Line(LEFT*3.3 + DOWN*0.5, LEFT*2 + DOWN*0.5, color=white, stroke_width=3)
        )
        
        left_type = Line(seated_body.get_right() + UP*0.1, seated_body.get_right() + RIGHT*0.6 + UP*0.3, color=white, stroke_width=6)
        right_type = Line(seated_body.get_right() + DOWN*0.1, seated_body.get_right() + RIGHT*0.7 + UP*0.1, color=white, stroke_width=6)
        
        coding_character = VGroup(seated_body, seated_head, left_type, right_type, chair, desk)
        
        self.play(
            Transform(character, coding_character),
            run_time=2
        )
        
        # Coding screen
        screen = Rectangle(width=3, height=2, color=white, fill_color=dark_blue, fill_opacity=0.9, stroke_width=3).move_to(RIGHT*0.5 + UP*0.2)
        
        # Small white light glow behind the screen
        screen_glow = Rectangle(width=3.2, height=2.2, color=white, fill_opacity=0.08, stroke_width=0).move_to(screen.get_center())
        
        self.play(FadeIn(screen), FadeIn(screen_glow), run_time=1.5)
        
        screen_text = VGroup(
            Text("print('Hello World')", font_size=12, color=green_color).align_to(screen, UL).shift(DR*0.3),
            Text("import pandas as pd", font_size=12, color=green_color).align_to(screen, UL).shift(DR*0.3 + DOWN*0.4),
            Text("SELECT * FROM users", font_size=12, color=green_color).align_to(screen, UL).shift(DR*0.3 + DOWN*0.8)
        )
        self.play(Write(screen_text), run_time=3)
        
        # Tech logos (white boxes with gold texts)
        python_logo = VGroup(
            RoundedRectangle(width=1.6, height=0.6, corner_radius=0.1, color=white, fill_color=dark_blue, fill_opacity=0.8, stroke_width=2),
            Text("Python", font_size=14, color=white)
        ).move_to(RIGHT*4 + UP*2)
        
        js_logo = VGroup(
            RoundedRectangle(width=1.2, height=0.6, corner_radius=0.1, color=white, fill_color=dark_blue, fill_opacity=0.8, stroke_width=2),
            Text("JS", font_size=14, color=white)
        ).move_to(RIGHT*5 + UP*0.8)
        
        sql_logo = VGroup(
            RoundedRectangle(width=1.4, height=0.6, corner_radius=0.1, color=white, fill_color=dark_blue, fill_opacity=0.8, stroke_width=2),
            Text("SQL", font_size=14, color=white)
        ).move_to(RIGHT*4 + DOWN*0.4)
        
        docker_logo = VGroup(
            RoundedRectangle(width=1.8, height=0.6, corner_radius=0.1, color=white, fill_color=dark_blue, fill_opacity=0.8, stroke_width=2),
            Text("Docker", font_size=14, color=white)
        ).move_to(RIGHT*5.2 + DOWN*1.6)
        
        logos = VGroup(python_logo, js_logo, sql_logo, docker_logo)
        
        self.play(
            AnimationGroup(*[FadeIn(logo, scale=0.5) for logo in logos], lag_ratio=0.2),
            run_time=3
        )
        
        # White connecting lines representing data flow
        data_line1 = Line(screen.get_right(), python_logo.get_left(), color=white, stroke_opacity=0.2, stroke_width=2)
        data_line2 = Line(screen.get_right(), js_logo.get_left(), color=white, stroke_opacity=0.2, stroke_width=2)
        data_line3 = Line(screen.get_right(), sql_logo.get_left(), color=white, stroke_opacity=0.2, stroke_width=2)
        data_line4 = Line(screen.get_right(), docker_logo.get_left(), color=white, stroke_opacity=0.2, stroke_width=2)
        data_lines = VGroup(data_line1, data_line2, data_line3, data_line4)
        
        self.play(Create(data_lines), run_time=2)
        
        text4 = Text("Python, JavaScript, SQL... autodidacte intensif", font_size=28, color=white).to_edge(DOWN, buff=1.3)
        self.play(Write(text4), run_time=2)
        
        # Float animation
        floating_anims = [logo.animate.shift(UP*0.15).set_color(white) for logo in logos]
        self.play(
            *floating_anims,
            screen_text.animate.shift(UP*0.1),
            run_time=4
        )
        
        self.wait(11) # Total 30s (cumulative 70s)
        
        # ----------------------------------------------------
        # SCENE 5: TRANSFORMATION COMPLÈTE (70 - 85s)
        # ----------------------------------------------------
        bg5 = create_bg(sky_blue, royal_blue)
        self.play(
            FadeIn(bg5),
            FadeOut(screen),
            FadeOut(screen_glow),
            FadeOut(screen_text),
            FadeOut(logos),
            FadeOut(data_lines),
            FadeOut(binary_elements),
            FadeOut(text4),
            run_time=1.5
        )
        
        # Hero posture with white glow effect behind the character
        hero_glow = Annulus(inner_radius=0.5, outer_radius=2, color=real_white, fill_opacity=0.08, stroke_width=0)
        hero_glow.move_to(ORIGIN)
        self.add(hero_glow)
        
        hero_left_arm = Line(body.get_left() + UP*0.2, body.get_left() + DOWN*0.2 + LEFT*0.4, color=white, stroke_width=6)
        hero_right_arm = Line(body.get_right() + UP*0.2, body.get_right() + DOWN*0.2 + RIGHT*0.4, color=white, stroke_width=6)
        hero_character = VGroup(body, head, hero_left_arm, hero_right_arm, legs)
        hero_character.move_to(ORIGIN)
        
        self.play(
            Transform(character, hero_character),
            FadeIn(hero_glow, scale=0.8),
            run_time=1.5
        )
        
        # White & Gold Badges
        badge1 = Circle(radius=0.5, color=white, fill_color=dark_blue, fill_opacity=0.9, stroke_width=4).move_to(LEFT*4 + UP*1)
        badge1_text = Text("CODE", font_size=12, color=white).move_to(badge1.get_center())
        
        badge2 = Circle(radius=0.5, color=white, fill_color=dark_blue, fill_opacity=0.9, stroke_width=4).move_to(RIGHT*4 + UP*1)
        badge2_text = Text("DATA", font_size=12, color=white).move_to(badge2.get_center())
        
        badge3 = Circle(radius=0.5, color=white, fill_color=dark_blue, fill_opacity=0.9, stroke_width=4).move_to(LEFT*4 + DOWN*0.6)
        badge3_text = Text("AI", font_size=12, color=white).move_to(badge3.get_center())
        
        badge4 = Circle(radius=0.5, color=white, fill_color=dark_blue, fill_opacity=0.9, stroke_width=4).move_to(RIGHT*4 + DOWN*0.6)
        badge4_text = Text("OPS", font_size=12, color=white).move_to(badge4.get_center())
        
        badges = VGroup(badge1, badge2, badge3, badge4)
        badges_text = VGroup(badge1_text, badge2_text, badge3_text, badge4_text)
        
        self.play(
            AnimationGroup(
                AnimationGroup(*[FadeIn(b, scale=0.5) for b in badges]),
                AnimationGroup(*[Write(t) for t in badges_text]),
                lag_ratio=0.2
            ),
            run_time=3
        )
        
        text5 = Text("D'une invalidité à l'excellence technologique", font_size=28, color=white).to_edge(DOWN, buff=1.4)
        self.play(Write(text5), run_time=2)
        
        self.wait(7) # Total 15s (cumulative 85s)
        
        # ----------------------------------------------------
        # SCENE 6: CONCLUSION (85 - 90s)
        # ----------------------------------------------------
        bg6 = create_bg(sky_blue, sky_blue)
        
        # Rising white sun/light in background
        sun = Circle(radius=3, color=real_white, fill_color=real_white, fill_opacity=0.25, stroke_width=0).move_to(RIGHT*8 + DOWN*4.5)
        
        self.play(
            FadeIn(bg6),
            FadeIn(sun),
            FadeOut(badges),
            FadeOut(badges_text),
            FadeOut(hero_glow),
            FadeOut(text5),
            run_time=1
        )
        
        # Pointing right
        forward_left_arm = Line(body.get_left() + UP*0.2, body.get_left() + DOWN*0.6, color=white, stroke_width=6)
        forward_right_arm = Line(body.get_right() + UP*0.2, body.get_right() + DOWN*0.3 + RIGHT*0.4, color=white, stroke_width=6)
        forward_character = VGroup(body, head, forward_left_arm, forward_right_arm, legs)
        forward_character.move_to(LEFT*3)
        
        self.play(
            Transform(character, forward_character),
            run_time=1
        )
        
        text6 = Text("La reconversion, c'était le meilleur pivot", font_size=32, color=dark_blue)
        text6.next_to(character, RIGHT, buff=1)
        self.play(Write(text6), run_time=1.5)
        
        self.wait(1.5) # Total 5s (cumulative 90s)
