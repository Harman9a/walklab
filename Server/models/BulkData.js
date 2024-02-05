const mongoose = require("mongoose");

const BulkDataSchema = mongoose.Schema(
  {
    data: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BulkData = mongoose.model("BulkData", BulkDataSchema);

module.exports = BulkData;
