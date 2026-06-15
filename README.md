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

## Ege IoT Test Demo

IoT tarafında sensör verisini hazırlayan küçük bir test edilebilir katman yer alır.

- Sensör yardımcıları: `iot/sensorSimulator.js`
- Gateway sarmalayıcı: `iot/gateway.js`
- Test dosyası: `iot/sensorSimulator.test.js`
- Amaç: sahte telemetri ve hata kontrolünü küçük bir örnekle göstermek