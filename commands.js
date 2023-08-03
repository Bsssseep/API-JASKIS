// JASKIS
// paste the MongoDB commands you use underneath each prompt
mongo
// GETTING STARTED
// 1. Create a database called jaskis

use Jaskis

db

// 2. Create a collection called bounties

db.createCollection("bounties")

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object

{ name: "Thanoceros",}

// 2. Query for all bounties in the bounties collection
 
db.bounties.find ({bountiesCollection})


db.bounties.insertManu(bountiesCollection);
// 3. Insert many bounties at once using the given objects

db.bounties.insertMany(bounties);


// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.collection.find({ location: "Grasslands" });

// 2. Query for all bounties with a reward worth 10000 or more
db.collection.find({ reward: { $gte: 10000 } });

// 3. Query for all bounties, but exclude the client attribute from being shown

db.bounties.find({}, { client: 0 })


// 4. Query for a Groundhog in the Woodlands

db.bounties.find({ species: "Groundhog", location: "Woodlands" })


// Update and Delete
// 1. Update the reward for Polarwind to 10000

db.Polarwind.update( reward: { $gte: 10000 } })

// 2. Remove Lokinkajou

db.bounties.find({}, { client: 0 })


// 3. Delete all bounties sent by Songbird
node deleteBounties.js

// 4. Update all captured statuses to true
db.updateAllCapturedStatusToTrue()