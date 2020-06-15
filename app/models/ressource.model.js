module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        type: String,
        lien: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Ressource = mongoose.model("ressource", schema);
    return Ressource;
  };