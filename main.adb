with Ada.Text_IO;
use Ada.Text_IO;

procedure Main is

   type Language_Record is record
      Name        : String (1 .. 20);
      Year_Created : Integer;
   end record;

   type Language_Array is array (Positive range <>) of Language_Record;

   Languages : constant Language_Array :=
   (
      (Name => "Python              ", Year_Created => 1991),
      (Name => "JavaScript          ", Year_Created => 1995),
      (Name => "Java                ", Year_Created => 1995),
      (Name => "C#                  ", Year_Created => 2000),
      (Name => "C++                 ", Year_Created => 1985),
      (Name => "C                   ", Year_Created => 1972),
      (Name => "TypeScript          ", Year_Created => 2012),
      (Name => "Go                  ", Year_Created => 2009),
      (Name => "Rust                ", Year_Created => 2010),
      (Name => "Ada                 ", Year_Created => 1980)
   );

   procedure Print_Header is
   begin
      Put_Line("========================================");
      Put_Line("          ALPHA DEV HUB SYSTEM");
      Put_Line("========================================");
   end Print_Header;

   procedure Print_Languages is
   begin
      Put_Line("");
      Put_Line("Programming Languages:");
      Put_Line("----------------------------------------");

      for I in Languages'Range loop
         Put_Line(
            Integer'Image(I) &
            ". " &
            Languages(I).Name &
            " Year: " &
            Integer'Image(Languages(I).Year_Created)
         );
      end loop;
   end Print_Languages;

   procedure Print_Projects is
   begin
      Put_Line("");
      Put_Line("Projects:");
      Put_Line("----------------------------------------");
      Put_Line("1. AI Assistant");
      Put_Line("2. Cyberpunk Portfolio Website");
      Put_Line("3. Cloud API");
      Put_Line("4. Automation Tools");
      Put_Line("5. Game Engine");
      Put_Line("6. Image Gallery");
      Put_Line("7. Music Player");
      Put_Line("8. Blog System");
      Put_Line("9. Discord Bot");
      Put_Line("10. Open Source Tools");
   end Print_Projects;

   procedure Print_Skills is
   begin
      Put_Line("");
      Put_Line("Skills:");
      Put_Line("----------------------------------------");
      Put_Line("- Web Development");
      Put_Line("- AI and Machine Learning");
      Put_Line("- Cybersecurity");
      Put_Line("- Software Engineering");
      Put_Line("- Open Source Development");
      Put_Line("- Backend Development");
      Put_Line("- Frontend Development");
   end Print_Skills;

begin
   Print_Header;
   Print_Languages;
   Print_Projects;
   Print_Skills;

   Put_Line("");
   Put_Line("Thank you for visiting Alpha Dev Hub!");
   Put_Line("========================================");

end Main;
