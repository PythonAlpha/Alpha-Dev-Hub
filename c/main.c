#include <stdio.h>

int main() {

    char *languages[] = {
        "Python",
        "JavaScript",
        "C#",
        "C++",
        "C",
        "TypeScript",
        "Go",
        "Rust"
    };

    printf("===== ALPHA DEV HUB =====\n\n");

    printf("Programming Languages:\n\n");

    for (int i = 0; i < 8; i++) {
        printf("- %s\n", languages[i]);
    }

    return 0;
}
