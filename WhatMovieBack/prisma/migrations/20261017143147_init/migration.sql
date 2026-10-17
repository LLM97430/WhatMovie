-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "first_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "price" DECIMAL(10,2),
    "start_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watchlists" (
    "id" SERIAL NOT NULL,
    "tmdb_media_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "progress" VARCHAR(250),
    "rating" SMALLINT,
    "comment" VARCHAR(250),
    "user_id" TEXT NOT NULL,

    CONSTRAINT "watchlists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_platforms" (
    "user_id" INTEGER NOT NULL,
    "tmdb_platform_id" INTEGER NOT NULL,

    CONSTRAINT "user_platforms_pkey" PRIMARY KEY ("user_id","tmdb_platform_id")
);

-- CreateTable
CREATE TABLE "user_genres" (
    "user_id" INTEGER NOT NULL,
    "tmdb_genre_id" INTEGER NOT NULL,

    CONSTRAINT "user_genres_pkey" PRIMARY KEY ("user_id","tmdb_genre_id")
);

-- CreateTable
CREATE TABLE "watchlist_platforms" (
    "watchlist_id" INTEGER NOT NULL,
    "tmdb_platform_id" INTEGER NOT NULL,

    CONSTRAINT "watchlist_platforms_pkey" PRIMARY KEY ("watchlist_id","tmdb_platform_id")
);

-- CreateTable
CREATE TABLE "media_genres" (
    "tmdb_media_id" INTEGER NOT NULL,
    "tmdb_genre_id" INTEGER NOT NULL,

    CONSTRAINT "media_genres_pkey" PRIMARY KEY ("tmdb_media_id","tmdb_genre_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watchlists" ADD CONSTRAINT "watchlists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
