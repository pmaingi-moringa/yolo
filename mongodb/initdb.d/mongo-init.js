db = db.getSiblingDB("yolomy");

db.createUser({
    user: "jon_snow",
    pwd: "ygritte",
    roles: [
      {
        role: 'readWrite', 
        db: 'yolomy'
      },
    ],
  });

db.createCollection("Product");