module.exports = function(Model) {
    //die Methoden die für dieses Modul wichtig sind, und nur für dieses Modul
    Model.prototype.fullname = function() {
        return this.firstName + ' ' + this.lastName;
    };
}