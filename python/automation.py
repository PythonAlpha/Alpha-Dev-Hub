import datetime

class AlphaDevHub:
    def __init__(self):
        self.name = "Alpha Dev Hub"
        self.languages = [
            "Python",
            "JavaScript",
            "C#",
            "C++",
            "C",
            "TypeScript",
            "Go",
            "Rust"
        ]

    def show_info(self):
        print("=" * 40)
        print(self.name)
        print("=" * 40)
        print("Current Time:", datetime.datetime.now())

        print("\nLanguages:")
        for language in self.languages:
            print(f"• {language}")

if __name__ == "__main__":
    app = AlphaDevHub()
    app.show_info()
