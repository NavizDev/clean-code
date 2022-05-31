(() => {

    //EJEMPLO COMO UNA CLASE APLICA EL PRINCIPO DE RESPONSABILIDAD ÚNICA
    //Priorizar la composición frente a la herencia

    type Gender = 'M' | 'F'

    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    interface UserProps {
        email: string,
        role: string,
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor(
            { email,
                role,
            }: UserProps
        ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }

    }

    interface SettingsProps {
        workingDirectory: string,
        lastOpenFolder: Date,

    }
    class Settings {
        // constructor(
        //     public workingDirectory: string = '',
        //     public lastOpenFolder: Date = new Date()
        // ){}
        public workingDirectory: string;
        public lastOpenFolder: Date;

        constructor(
            { workingDirectory,
                lastOpenFolder,
            }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string,
        lastOpenFolder: Date,
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date
    }

    class UserSettings {
        public person : Person;
        public user: User;
        public setting: Settings

        constructor({
            name, gender, birthdate,
            email, role,
            workingDirectory, lastOpenFolder
        }: UserSettingsProps) {
            this.person = new Person({name,gender,birthdate})
            this.user = new User({email,role})
            this.setting = new Settings({lastOpenFolder,workingDirectory})
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/home/public',
        lastOpenFolder: new Date(),
        email: 'juansilupu@gmail.com',
        role: 'user',
        name: 'Jose',
        gender: 'F',
        birthdate: new Date('1994-12-25')}
    )
    console.log({ userSettings })

})()