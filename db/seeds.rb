# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Location.create(location_name: 'Aardvark Books', street_address: '227 Church St', city: 'San Francisco', state: "CA", latitude: 37.767057, longitude: -122.428577, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'Borderlands Books', street_address: '866 Valencia St', city: 'San Francisco', state: "CA", latitude: 37.758985, longitude: -122.421677, num_cats: 3, free: true, adoptable: false)
Location.create(location_name: 'KitTea Cat Cafe', street_address: '96 Gough St', city: 'San Francisco', state: "CA", latitude: 37.773915, longitude: -122.422184, num_cats: 12, free: false, adoptable: true)
Location.create(location_name: 'Cat Town Oakland', street_address: '2869 Broadway', city: 'Oakland', state: "CA", latitude: 37.817364, longitude: -122.263367, num_cats: 31, free: false, adoptable: true)
Location.create(location_name: 'SPCA Pacific Heights', street_address: '2343 Fillmore St', city: 'San Francisco', state: "CA", latitude: 37.791333, longitude: -122.434577, num_cats: 20, free: true, adoptable: true)
Location.create(location_name: 'SPCA Mission', street_address: '250 Florida St', city: 'San Francisco', state: "CA", num_cats: 100, free: true, adoptable: true)
Location.create(location_name: "Nabila's", street_address: '559 Hayes St', city: 'San Francisco', state: "CA", latitude: 37.776335, longitude: -122.425664, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'Haight Fillmore Whole Foods', street_address: '501 Haight St', city: 'San Francisco', state: "CA", latitude: 37.771958, longitude: -122.430611, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'Fredericksen Hardware & Paint', street_address: '3029 Fillmore St', city: 'San Francisco', state: "CA", latitude: 37.797508, longitude: -122.435799, num_cats: 2, free: true, adoptable: false)
Location.create(location_name: 'Haight Fillmore Whole Foods', street_address: '501 Haight St', city: 'San Francisco', state: "CA", latitude: 37.771958, longitude: -122.430611, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'Pegasus Books', street_address: '2349 Shattuck Ave', city: 'Berkeley', state: "CA", latitude: 37.866531, longitude: -122.267178, num_cats: 2, free: true, adoptable: false)
Location.create(location_name: 'Recycle Bookstore West', street_address: '275 E Campbell Ave', city: 'Campbell', state: "CA", latitude: 37.287188, longitude: -121.944651, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'Recycle Bookstore', street_address: '1066 The Alameda', city: 'San Jose', state: "CA", latitude: 37.331286, longitude: -121.911065, num_cats: 2, free: true, adoptable: false)
Location.create(location_name: 'Boba Bar', street_address: '310 S 3rd St', city: 'San Jose', state: "CA", latitude: 37.332399, longitude: -121.884583, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'The Dancing Cat', street_address: '702 E Julian St', city: 'San Jose', state: "CA", latitude: 37.347312, longitude: -121.879203, num_cats: 8, free: false, adoptable: true)
Location.create(location_name: 'Bird & Beckett Books & Records', street_address: '653 Chenery St', city: 'San Francisco', state: "CA", latitude: 37.734375, longitude: -122.432958,  num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'Bayside Garden Center', street_address: '1520 Tiburon Blvd', city: 'Belvedere Tiburon', state: "CA", latitude: 37.876371, longitude: -122.461359, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'Bay Natives', street_address: '10 Cargo Way', city: 'San Francisco', state: "CA", latitude: 37.740731, longitude: -122.376662, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: "Cindy's Market", street_address: '2084 Hayes St', city: 'San Francisco', state: "CA", latitude: 37.773516, longitude: -122.450749, num_cats: 1, free: true, adoptable: false)
Location.create(location_name: 'Flora Grubb Gardens', street_address: '1634 Jerrold Ave', city: 'San Francisco', state: "CA", latitude: 37.739740, longitude: -122.390240, num_cats: 1, free: true, adoptable: false)


User.create(username: "Rachel", password: "123456")

Review.create(author_id: 1, location_id: 1, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 2, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 3, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 4, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 5, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 6, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 7, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 8, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 9, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 10, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 11, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 12, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 13, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 14, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 15, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 16, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 17, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 18, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 19, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)
Review.create(author_id: 1, location_id: 20, body: "80% of the time I walk past this storefront the resident orange Tabby 'Owen' is sunning himself in the main window. He's happy to be petted even while in the middle of a nap. One of the best bets for a free cat experience in town!", rating: 5)

