using System;
using System.Collections.Generic;

namespace AlphaDevHub
{
    class DeveloperProfile
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public List<string> Skills { get; set; }

        public DeveloperProfile()
        {
            Name = "Alpha";
            Title = "Full Stack Developer";

            Skills = new List<string>
            {
                "Python",
                "JavaScript",
                "C#",
                "C++",
                "Java",
                "Go",
                "Rust",
                "PHP",
                "Swift",
                "TypeScript"
            };
        }

        public void ShowProfile()
        {
            Console.WriteLine("===== ALPHA DEV HUB =====");
            Console.WriteLine($"Name: {Name}");
            Console.WriteLine($"Title: {Title}");

            Console.WriteLine("\nSkills:");
            foreach (string skill in Skills)
            {
                Console.WriteLine($"• {skill}");
            }
        }

        static void Main(string[] args)
        {
            DeveloperProfile profile = new DeveloperProfile();
            profile.ShowProfile();

            Console.ReadKey();
        }
    }
}
