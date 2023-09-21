// https://rapidapi.com/sameer.kumar/api/aztro/

const settings = {
    async: true,
    crossDomain: true,
    url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today',
    method: 'POST',
    headers: {
        'X-RapidAPI-Key': '525d6a4fd6mshedfa7598551df54p17111djsn7f16e1dc3796',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});