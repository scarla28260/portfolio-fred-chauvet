from manim import *

class PortfolioHero(Scene):
    def construct(self):
        # Set background color to match the Deep Navy theme
        self.camera.background_color = "#0D1626"
        
        # Create a central node (representing AI / Core Data)
        core_node = Circle(radius=0.8, color="#D4AF37", fill_opacity=0.2)
        core_node.set_stroke(width=4)
        
        core_text = Text("AI & DATA", font_size=24, color="#FFFFFF")
        core_group = VGroup(core_node, core_text)
        
        self.play(DrawBorderThenFill(core_node), Write(core_text), run_time=2)
        
        # Create satellite nodes
        angles = [PI/4, 3*PI/4, 5*PI/4, 7*PI/4, 0, PI/2, PI, 3*PI/2]
        satellites = VGroup()
        connections = VGroup()
        
        for angle in angles:
            x = 3 * np.cos(angle)
            y = 3 * np.sin(angle)
            node = Dot(point=[x, y, 0], radius=0.2, color="#0284C7")
            satellites.add(node)
            
            line = Line(start=core_node.get_center(), end=node.get_center(), color="#0284C7", stroke_width=2, stroke_opacity=0.5)
            connections.add(line)
        
        self.play(
            AnimationGroup(
                *[Create(line) for line in connections],
                *[FadeIn(node, scale=0.5) for node in satellites],
                lag_ratio=0.1
            ),
            run_time=2
        )
        
        # Animate data flow (small dots moving along lines)
        data_packets = VGroup()
        for line in connections:
            packet = Dot(radius=0.08, color="#D4AF37")
            packet.move_to(line.get_start())
            data_packets.add(packet)
            
        self.add(data_packets)
        
        self.play(
            *[MoveAlongPath(packet, line, rate_func=linear) for packet, line in zip(data_packets, connections)],
            run_time=1.5
        )
        
        # Transform into a cohesive structure
        circle_path = Circle(radius=3, color="#D4AF37", stroke_opacity=0.3)
        self.play(Create(circle_path), FadeOut(data_packets), run_time=1.5)
        
        # Rotate the whole network
        network = VGroup(core_group, satellites, connections, circle_path)
        self.play(Rotate(network, angle=PI/2, about_point=ORIGIN), run_time=3, rate_func=smooth)
        
        self.wait(1)
