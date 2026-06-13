#include <iostream>
#include <vector>
using namespace std;

class AlphaDevHub {
public:
    string name = "Alpha Dev Hub";

    void showSkills() {
        vector<string> skills = {
            "Python",
            "JavaScript",
            "C#",
            "C++",
            "C",
            "TypeScript",
            "Go",
            "Rust"
        };

        cout << "===== " << name << " =====\n\n";

        cout << "Skills:\n";

        for (string skill : skills) {
            cout << "- " << skill << endl;
        }
    }
};

int main() {
    AlphaDevHub app;
    app.showSkills();

    return 0;
}
