# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# :title :event :sign :focus :mood :journal :date
Transit.create(title: "Emotional Balance", event: "Full Moon", sign: "Pisces", focus: "6H - Daily Routines", mood: "Overwhelmed", journal: "This full moon was conjunct my natal moon, really heigtening my emotions..", date: "19/09/2021")
Transit.create(title: "Me, in Review", event: "Mercury Rx", sign: "Libra", focus: "1H - Self/Identity", mood: "Excited", journal: "Time to re-examine, reinvent, and revive myself!", date: "27/09/2021")
Transit.create(title: "Test", event: "New Moon", sign: "Virgo", focus: "12H - Subconscious", mood: "Tired", journal: "Testing!", date: "10/11/2021")