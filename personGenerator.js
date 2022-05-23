const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Оля",
            "id_2": "Маша",
            "id_3": "Саша",
            "id_4": "Валентина",
            "id_5": "Лариса",
            "id_6": "Алина",
            "id_7": "Наташа",
            "id_8": "Татьяна",
            "id_9": "Галя",
            "id_10": "Марта"
        }
    }`,

    PatroNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Петрович",
            "id_2": "Васильевич",
            "id_3": "Николаевич",
            "id_4": "Петренко",
            "id_5": "Дамирович",
            "id_6": "Александрович",
            "id_7": "Егорович",
            "id_8": "Максимович",
            "id_9": "Сергеевич",
            "id_10": "Сашкевич"
        }
    }`,

    PatroNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Васильевна",
            "id_2": "Петровна",
            "id_3": "Николаевна",
            "id_4": "Анатольевна",
            "id_5": "Дамировна",
            "id_6": "Егоровна",
            "id_7": "Максимовна",
            "id_8": "Сергеевна",
            "id_9": "Алексеевна",
            "id_10": "Дмитриевна"
        }
    }`,

    occupationMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "инженер",
            "id_2": "программист",
            "id_3": "уборщик",
            "id_4": "танкист",
            "id_5": "пилот",
            "id_6": "режиссер",
            "id_7": "татуировщик",
            "id_8": "повар",
            "id_9": "рабочий",
            "id_10": "врач"
        }
    }`,

    occupationFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "повар",
            "id_2": "медсестра",
            "id_3": "массажист",
            "id_4": "официантка",
            "id_5": "хирург",
            "id_6": "актриса",
            "id_7": "певица",
            "id_8": "модель",
            "id_9": "художница",
            "id_10": "полицейский"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        let gender = this.randomIntNumber();
        return gender ? this.GENDER_MALE : this.GENDER_FEMALE;   
    },

    randomFirstName: function() {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

     randomSurName: function() {
        return this.randomValue(this.surnameJson);
    },

    randomPatroName: function() {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.PatroNameMaleJson);
        }
        else {
            return this.randomValue(this.PatroNameFemaleJson);
        }
    },

    randomOccupation: function() {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.occupationMaleJson);
        }
        else {
            return this.randomValue(this.occupationFemaleJson);
        }
    },

    randomDayOfBirth: function() {
        const arrayMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let month = this.randomIntNumber(11, 0);
        month = arrayMonth[month];
        let day;
        switch (month) {
            case 2: day = this.randomIntNumber(28, 1);
            break;
            case 4 || 6 || 9 || 11: day = this.randomIntNumber(30, 1);
            break;
            default: day = this.randomIntNumber(31, 1);
            break;
        }
        let year = this.randomIntNumber(1989, 2001);
        return day + ' ' + month + ' ' + year + ' года';    
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        if (this.person.gender === 'Женщина') {
            this.person.surName = this.person.surName + 'а';
        }
        this.person.PatroName = this.randomPatroName();
        this.person.occupation = this.randomOccupation();
        this.person.DayOfBirth = this.randomDayOfBirth();
        return this.person;
    }
};
