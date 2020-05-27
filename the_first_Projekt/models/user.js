module.exports = function(Model) {
    Model.prototype.fullname = function() {
        return this.firstName + ' ' + this.lastName;
    };
}