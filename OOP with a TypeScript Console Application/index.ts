class Person {
    // Declare a field to represent the personality
    private personality: string;
  
    // Constructor
    constructor() {
      this.personality = "Mystery";
    }
  
    // This method asks a question and sets the personality
    askQuestion(answer: number) {
      if (answer === 1) {
        this.personality = "Extravert";
      } else {
        this.personality = "Introvert";
      }
    }
  
    // This method returns the value of the Personality
    getPersonality(): string {
      return this.personality;
    }
  }
  
  // Create a new person
  const person = new Person();
  
  // Ask the person a question
  person.askQuestion(1);
  
  // Print the person's personality
  console.log(person.getPersonality());

  
  