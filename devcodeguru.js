// Create a class named DevCodeGuru
class DevCodeGuru {
    constructor() {
        this.skills = [];
    }

    // Method: acquire a new skill
    acquireSkill(skill) {
        this.skills.push(skill);
        console.log(`Acquired ${skill} as a new skill.`);
    }

    // Method: relinquish a skill
    relinquishSkill(skill) {
        const index = this.skills.indexOf(skill);
        if (index !== -1) {
            this.skills.splice(index, 1);
            console.log(`Relinquished ${skill} as a skill.`);
        } else {
            console.log(`${skill} is not found in the acquired skills.`);
        }
    }

    // Method: list all acquired skills
    listSkills() {
        console.log("Acquired skills:");
        this.skills.forEach(skill => {
            console.log(skill);
        });
    }
}

// Create an instance of DevCodeGuru named myDevCodeGuru
const myDevCodeGuru = new DevCodeGuru();

// Acquire skills
myDevCodeGuru.acquireSkill("JavaScript");
myDevCodeGuru.acquireSkill("Python");
myDevCodeGuru.acquireSkill("Java");

// List all acquired skills
myDevCodeGuru.listSkills();

// Relinquish a skill
myDevCodeGuru.relinquishSkill("Python");

// List all acquired skills after relinquishing
myDevCodeGuru.listSkills();
