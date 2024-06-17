# vflix application

#### In the schema.prisma file, the definations are:
//*
 * @generator client - Specifies the code generator for Prisma client.
 * @provider prisma-client-js - Specifies the provider for the Prisma client code generator.
 */

/**
 * @datasource db - Specifies the data source configuration for the Prisma schema.
 * @provider mongodb - Specifies the provider for the MongoDB data source.
 * @url env("DATABASE_URL") - Specifies the URL for the MongoDB database.
 *//

//models

/**
 * @model User - Represents a user in the application.
 * @id String - Specifies the ID field for the User model.
 * @default(auto()) - Specifies that the ID field should be automatically generated.
 * @map("_id") - Maps the ID field to the "_id" column in the MongoDB collection.
 * @db.ObjectId - Specifies that the ID field should be stored as an ObjectId in the MongoDB collection.
 * @name String - Specifies the name field for the User model.
 * @image String? - Specifies the optional image field for the User model.
 * @email String? - Specifies the optional email field for the User model.
 * @unique - Specifies that the email field should be unique.
 * @emailVerified DateTime - Specifies the emailVerified field for the User model.
 * @hashedPassword String? - Specifies the optional hashedPassword field for the User model.
 * @createdAt DateTime - Specifies the createdAt field for the User model.
 * @default(now()) - Specifies that the createdAt field should have a default value of the current timestamp.
 * @updatedAt DateTime - Specifies the updatedAt field for the User model.
 * @updatedAt - Specifies that the updatedAt field should be automatically updated whenever the record is modified.
 * @favouriteIds String[] - Specifies the favouriteIds field as an array of String values.
 * @db.ObjectId - Specifies that the elements of the favouriteIds array should be stored as ObjectIds in the MongoDB collection.
 * @sessions Session[] - Specifies the sessions field as an array of Session objects.
 * @accounts Account[] - Specifies the accounts field as an array of Account objects.
 */

/**
 * @model Account - Represents an account associated with a user.
 * @id String - Specifies the ID field for the Account model.
 * @default(auto()) - Specifies that the ID field should be automatically generated.
 * @map("_id") - Maps the ID field to the "_id" column in the MongoDB collection.
 * @db.ObjectId - Specifies that the ID field should be stored as an ObjectId in the MongoDB collection.
 * @userId String - Specifies the userId field for the Account model.
 * @db.ObjectId - Specifies that the userId field should be stored as an ObjectId in the MongoDB collection.
 * @type String - Specifies the type field for the Account model.
 * @provider String - Specifies the provider field for the Account model.
 * @providerAccountId String - Specifies the providerAccountId field for the Account model.
 * @refresh_token String? - Specifies the optional refresh_token field for the Account model.
 * @db.String - Specifies that the refresh_token field should be stored as a String in the MongoDB collection.
 * @access_token String? - Specifies the optional access_token field for the Account model.
 * @db.String - Specifies that the access_token field should be stored as a String in the MongoDB collection.
 * @expires_at Int? - Specifies the optional expires_at field for the Account model.
 * @token_type String? - Specifies the optional token_type field for the Account model.
 * @scope String? - Specifies the optional scope field for the Account model.
 * @id_token String? - Specifies the optional id_token field for the Account model.
 * @session_state String? - Specifies the optional session_state field for the Account model.
 * @user User - Specifies the user field as a relation to the User model.
 * @relation(fields: [userId], references: [id], onDelete: Cascade) - Specifies the relation between the userId field and the id field of the User model.
 * @unique([provider, providerAccountId]) - Specifies that the combination of provider and providerAccountId should be unique.
 */

/**
 * @model Session - Represents a session associated with a user.
 * @id String - Specifies the ID field for the Session model.
 * @default(auto()) - Specifies that the ID field should be automatically generated.
 * @map("_id") - Maps the ID field to the "_id" column in the MongoDB collection.
 * @db.ObjectId - Specifies that the ID field should be stored as an ObjectId in the MongoDB collection.
 * @sessionToken String - Specifies the sessionToken field for the Session model.
 * @unique - Specifies that the sessionToken field should be unique.
 * @userId String - Specifies the userId field for the Session model.
 * @db.ObjectId - Specifies that the userId field should be stored as an ObjectId in the MongoDB collection.
 * @expires DateTime - Specifies the expires field for the Session model.
 * @user User - Specifies the user field as a relation to the User model.
 * @relation(fields: [userId], references: [id], onDelete: Cascade) - Specifies the relation between the userId field and the id field of the User model.
 */

/**
 * @model VerificationToken - Represents a verification token.
 * @id String - Specifies the ID field for the VerificationToken model.
 * @default(auto()) - Specifies that the ID field should be automatically generated.
 * @map("_id") - Maps the ID field to the "_id" column in the MongoDB collection.
 * @db.ObjectId - Specifies that the ID field should be stored as an ObjectId in the MongoDB collection.
 * @identifier String - Specifies the identifier field for the VerificationToken model.
 * @token String - Specifies the token field for the VerificationToken model.
 * @unique - Specifies that the token field should be unique.
 * @expires DateTime - Specifies the expires field for the VerificationToken model.
 * @unique([identifier, token]) - Specifies that the combination of identifier and token should be unique.
 */

/**
 * @model Movie - Represents a movie in the application.
 * @id String - Specifies the ID field for the Movie model.
 * @default(auto()) - Specifies that the ID field should be automatically generated.
 * @map("_id") - Maps the ID field to the "_id" column in the MongoDB collection.
 * @db.ObjectId - Specifies that the ID field should be stored as an ObjectId in the MongoDB collection.
 * @title String - Specifies the title field for the Movie model.
 * @description String - Specifies the description field for the Movie model.
 * @videoUrl String - Specifies the videoUrl field for the Movie model.
 * @thumbnailUrl String - Specifies the thumbnailUrl field for the Movie model.
 * @genre String - Specifies the genre field for the Movie model.
 * @duration String - Specifies the duration field for the Movie model.
 */