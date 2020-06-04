module.exports = function(Model) {
    //die Methoden die für dieses Modul wichtig sind, und nur für dieses Modul
    Model.prototype.fullname = function() {
        return this.firstName + ' ' + this.lastName;
    };
    Model.prototype.writeRemotes = function(data) {
        const self = this;

        if (typeof data.firstName !== 'undefined') {
            self.firstName = data.firstName;
        }

        if (typeof data.lastName !== 'undefined') {
            self.lastName = data.lastName;
        }

        if (typeof data.email !== 'undefined') {
            self.email = data.email;
        }

        if (typeof data.passwordHash !== 'undefined') {
            self.passwordHash = data.passwordHash;
        }


    }

}