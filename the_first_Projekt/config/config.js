// das Model als Hilfer für die cookies erzeugung, man braucht bei Node.js ExpireDate, es wird hier durch jwtExpiresAfter automatisch erzeugt
//und noch dazu the Secret-Word für die Cookies, es wird mit dem cookies Detail hingefügt hingefügt 
module.exports = {
    secret: process.env.SECRET || 'akopkeopqkmwopkeOPAKEOWPJAIOWjIOANMDIKOAJ123123asmdokn918293SASD',
    jwtExpiresAfter: 4 * 60 * 60 * 1000,
    cookieName: '_wab_auth_jwt',
};