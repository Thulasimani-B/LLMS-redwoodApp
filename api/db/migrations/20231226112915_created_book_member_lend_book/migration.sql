-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "yearOfPub" DATETIME NOT NULL,
    "availableStatus" TEXT DEFAULT 'available'
);

-- CreateTable
CREATE TABLE "Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,
    "age" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "LendBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "DueDate" DATETIME NOT NULL,
    "lendAt" DATETIME NOT NULL,
    "returnAt" DATETIME,
    "memberId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,
    CONSTRAINT "LendBook_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LendBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
