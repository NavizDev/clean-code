(()=>{

    //EJEMPLO COMO UNA CLASE NO APLICA EL PRINCIPO DE RESPONSABILIDAD ÚNICA
    //EL PROBLEMA DE LA HERENCIA.

    type Gender = 'M' | 'F'
    class Person{
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate:Date
        ){}

    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name:string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: Date,
            email:string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        '/home/public',
        new Date(),
        'juansilupu@gmail.com',
        'user',
        'Jose',
        'F',
        new Date('1994-12-25')
    )
    console.log({userSettings})

})()