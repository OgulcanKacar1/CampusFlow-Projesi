# CampusFlow-Projesi
aaaa

ogulcan ilk commit t-10

## Oğulcan API Demo

Bu küçük demo, IoT destekli otopark doluluk sistemi için basit bir backend iskeleti sunar.

Örnek uçlar:

- `GET /health` - servis kontrolü
- `GET /api/parking/occupancy` - anlık doluluk bilgisi
- `POST /api/parking/occupancy` - sahte sensör verisi ekleme

Amaç, gerçek üretim backend'inden önce ekip akışını ve commit takibini göstermek.

## Tolga React Native Demo

Mobil tarafta, otopark doluluk durumunu gösteren basit bir ekran yer alır.

- Demo ekran: `mobile/src/ParkingDashboard.js`
- Demo veri: `mobile/src/demoData.js`
- Amaç: IoT verisini telefonda görselleştiren küçük bir önizleme akışı

## Ege IoT Demo

IoT tarafında, otopark sensörlerinden gelen sahte telemetri akışı yer alır.

- Sensör simülatörü: `iot/sensorSimulator.js`
- Gateway çıktısı: `iot/gateway.js`
- Amaç: Otopark doluluk bilgisini backend'e taşıyan küçük bir örnek akış