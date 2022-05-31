(() => {

    //EJEMPLO COMO UNA CLASE NO APLICA EL PRINCIPO DE RESPONSABILIDAD ÚNICA
    //OBJETOS COMO PROPIEDADES

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
        name: string,
        gender: Gender,
        birthdate: Date,
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor(
            { email,
                role,
                name,
                gender,
                birthdate,
            }: UserProps
        ) {
            super({ name, gender, birthdate })
            this.lastAccess = new Date();
            this.email = email;
            this.role = role
        }

        checkCredentials() {
            return true;
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

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: Date;

        constructor(
            { workingDirectory,
                lastOpenFolder,
                email,
                role,
                name,
                gender,
                birthdate
            }: UserSettingsProps
        ) {
            super({email, role, name, gender, birthdate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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