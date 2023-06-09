# Kecamatan Jonggol

# Usage

1. Clone this repository

```markdown
https://github.com/Al-Ghozy03/kecamatan-jonggol.git
```

2. run `npm install`
3. Create `.env` file, and then copy this code below

```dotenv
PORT = 8000
JWT_SIGN = [jwt_key]

NODE_ENV = development

# mysql
DB_USERNAME = root
DB_PASSWORD =
DB_DEV = [db_dev]
DB_HOST = [db_host]
DB_DIALECT = [db_dialect]

# cloudinary
CLOUD_NAME = [cloudinary_name]
API_KEY = [cloudinary_api_key]
SECRET_API_KEY = [cloudinary_secret_key]
```

4. run `npx sequelize db:seed:all`

5. run `npm start`

# Documentation

**BASE URL = http://localhost:8000/api**

## Auth

#### Authme

```markdown
/auth/authme
```

**Method : GET**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Penduduk

#### Login

```markdown
/penduduk/login
```

**Method : POST**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Body

|   Name   |  Status  |         |
| :------: | :------: | :-----: |
|   nik    | Required | Integer |
| password | Required | String  |

#### Register

```markdown
/penduduk/register
```

**Method : POST**

Body

|   Name   |  Status  |         |
| :------: | :------: | :-----: |
|   nik    | Required | Integer |
|   nama   | Required | String  |
| password | Required | String  |
| id_desa  | Required | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List (Admin only)

```markdown
/penduduk
```

**Method : GET**

Params

| Name  |  Status  |         |                        |
| :---: | :------: | :-----: | :--------------------: |
| page  | Optional | Integer |                        |
| limit | Optional | Integer |                        |
|  key  | Optional | String  | Search by nama and NIK |

#### Detail

```markdown
/penduduk/[slug]
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit

```markdown
/penduduk/edit/[slug]
```

**Method : PUT**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Body

|            Name            |  Status  |                                                                        |
| :------------------------: | :------: | :--------------------------------------------------------------------: |
|            nama            | Optional |                                 String                                 |
|           no_hp            | Optional |                                Integer                                 |
|            nik             | Optional |                                Integer                                 |
|           alamat           | Required |                                 String                                 |
|             rt             | Required |                                 String                                 |
|             rw             | Required |                                 String                                 |
|           dusun            | Required |                                 String                                 |
|          nomor_kk          | Required |                                Integer                                 |
|          password          | Optional |                                 String                                 |
|       jenis_kelamin        | Required |                                 String                                 |
|        tempat_lahir        | Required |                                 String                                 |
|       tanggal_lahir        | Required |                                  Date                                  |
|           agama            | Required |                                 String                                 |
|    pendidikan_dalam_kk     | Required |                                 String                                 |
| pendidikan_sedang_ditempuh | Required |                                 String                                 |
|         pekerjaan          | Required |                                 String                                 |
|           kawin            | Required |                                 String                                 |
|     hubungan_keluarga      | Required |                                 String                                 |
|      kewarganegaraan       | Required |                                 String                                 |
|         nama_ayah          | Required |                                 String                                 |
|          nama_ibu          | Required |                                 String                                 |
|          nik_ayah          | Required |                                Integer                                 |
|          nik_ibu           | Required |                                Integer                                 |
|       golongan_darah       | Required | "A","B","AB","O","A+","A-","B+","B-","AB+","AB-","O+","O-","TIDAKTAHU" |
|         akta_lahir         | Required |                                 String                                 |
|   nomor_dokumen_passpor    | Required |                                 String                                 |
|   tanggal_akhir_passport   | Required |                                  Date                                  |
|    nomor_dokumen_KITAS     | Required |                                 String                                 |
|   nomor_akta_perkawinan    | Required |                                 String                                 |
|     tanggal_perkawinan     | Required |                                  Date                                  |
|      nomor_akta_cerai      | Required |                                Integer                                 |
|     tanggal_perceraian     | Required |                                  Date                                  |
|           cacat            | Required |                                 String                                 |
|          cara_kb           | Required |                                 String                                 |
|           hamil            | Required |                                 String                                 |
|      alamat_sekarang       | Required |                                 String                                 |
|          desa_id           | Required |                                Integer                                 |

## Admin

#### Login

```markdown
/admin/login
```

**Method : POST**

Body

|   Name   |  Status  |        |
| :------: | :------: | :----: |
|  email   | Required | String |
| password | Required | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Register (Only administrator)

```markdown
/admin/register
```

Note : **Admin is added by administrator** <br/>
**Method : POST**

Body

|   Name   |  Status  |         |
| :------: | :------: | :-----: |
|  email   | Required | String  |
| password | Required | String  |
| id_role  | Required | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List (Only admin)

```markdown
/admin
```

**Method : GET**

Params

| Name  |  Status  |         |                 |
| :---: | :------: | :-----: | :-------------: |
| page  | Optional | Integer |                 |
| limit | Optional | Integer |                 |
|  key  | Optional | String  | Search by email |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Layanan

#### Create (Only admin)

```markdown
/layanan/create
```

**Method : POST**

Body

|   Name   |  Status  |                         |
| :------: | :------: | :---------------------: |
|   nama   | Required |         String          |
|  syarat  | Required | Array convert to String |
| template | Required |          file           |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Edit (Only admin)

```markdown
/layanan/edit/[slug]
```

**Method : PUT**

Body

|   Name   |  Status  |                         |
| :------: | :------: | :---------------------: |
|   nama   | Optional |         String          |
|  syarat  | Optional | Array convert to String |
| template | Optional |          file           |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### List

```markdown
/layanan
```

**Method : GET**

Params

| Name  |  Status  |         |                |
| :---: | :------: | :-----: | :------------: |
| page  | Optional | Integer |                |
| limit | Optional | Integer |                |
|  key  | Optional | String  | Search by nama |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Detail

```markdown
/layanan/[slug]
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Only admin)

```markdown
/layanan/delete/[slug]
```

**Method : DELETE**

## Surat

#### Create

```markdown
/surat/create
```

**Method : POST**

Body

|    Name    |  Status  |         |
| :--------: | :------: | :-----: |
| id_layanan | Required | Integer |
|  id_desa   | Required | Integer |

#### Edit (Only admin)

```markdown
/surat/edit/[id]
```

**Method : PUT**

Body

|  Name  |  Status  |                                  |
| :----: | :------: | :------------------------------: |
| status | Required | "diproses", "diterima","ditolak" |

#### List

```markdown
/surat
```

**Method : GET**

Params

|    Name     |  Status  |         |                         |
| :---------: | :------: | :-----: | :---------------------: |
|    page     | Optional | Integer |                         |
|    limit    | Optional | Integer |                         |
|   status    | Optional | String  |    Search by status     |
| nomor_surat | Optional | String  |  Search by nomor_surat  |
|    bulan    | Optional | String  | Search by bulan ex: XII |
|    tahun    | Optional | String  |     Search by tahun     |
| id_layanan  | Optional | Integer |    Search by layanan    |
|   id_desa   | Optional | Integer |     Search by desa      |

#### Total

```markdown
/surat/total
```

## Berita

#### Create (Admin only)

```markdown
/berita/create
```

**Method : POST**

Body

|   Name    |  Status  |        |
| :-------: | :------: | :----: |
|   judul   | Required | String |
|  konten   | Required | String |
| thumbnail | Required |  File  |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Edit (Admin only)

```markdown
/berita/edit/[slug]
```

**Method : PUT**

Body

|   Name    |  Status  |        |
| :-------: | :------: | :----: |
|   judul   | Optional | String |
|  konten   | Optional | String |
| thumbnail | Optional |  File  |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Delete (Admin only)

```markdown
/berita/delete/[slug]
```

**Method : DELETE**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/berita
```

**Method : GET**

Params

| Name  |  Status  |                     |                 |
| :---: | :------: | :-----------------: | :-------------: |
| page  | Optional |       Integer       |                 |
| limit | Optional |       Integer       |                 |
|  key  | Optional |       String        | Search by judul |
| sort  | Optional | "terbaru","terlama" | Search by judul |

#### Detail

```markdown
/berita/[slug]
```

**Method : GET**

## Action

#### Create (Admin only)

```markdown
/action/create
```

**Method : POST**

Body

|    Name     |  Status  |        |
| :---------: | :------: | :----: |
| action_name | Required | String |
| description | Required | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin only)

```markdown
/action/edit/[id]
```

**Method : PUT**

Body

|    Name     |  Status  |        |
| :---------: | :------: | :----: |
| action_name | Optional | String |
| description | Optional | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin only)

```markdown
/action/delete/[id]
```

**Method : DELETE**

#### List (Admin only)

```markdown
/action
```

**Method : GET**

Params

| Name  |  Status  |         |                       |
| :---: | :------: | :-----: | :-------------------: |
| page  | Optional | Integer |                       |
| limit | Optional | Integer |                       |
|  key  | Optional | String  | Search by action_name |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Role

#### Create (Admin only)

```markdown
/role/create
```

**Method : POST**

Body

|   Name    |  Status  |        |
| :-------: | :------: | :----: |
| role_name | Required | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin only)

```markdown
/role/edit/[id]
```

**Method : PUT**

Body

|   Name    |  Status  |        |
| :-------: | :------: | :----: |
| role_name | Optional | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin only)

```markdown
/role/delete/[id]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List (Admin only)

```markdown
/role
```

**Method : GET**

Params

| Name  |  Status  |         |                       |
| :---: | :------: | :-----: | :-------------------: |
| page  | Optional | Integer |                       |
| limit | Optional | Integer |                       |
|  key  | Optional | String  | Search by action_name |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Role Action

#### Create (Admin only)

```markdown
/role-action/create
```

**Method : POST**

Body

|   Name    |  Status  |         |
| :-------: | :------: | :-----: |
|  id_role  | Required | Integer |
| id_action | Required | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin only)

```markdown
/role-action/edit/[id]
```

**Method : PUT**

Body

|   Name    |  Status  |         |
| :-------: | :------: | :-----: |
|  id_role  | Required | Integer |
| id_action | Required | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin only)

```markdown
/role-action/delete/[id]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List (Admin only)

```markdown
/role-action
```

**Method : GET**

Params

| Name  |  Status  |         |
| :---: | :------: | :-----: |
| page  | Optional | Integer |
| limit | Optional | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Desa

#### Create (Admin only)

```markdown
/desa/create
```

**Method : POST**

Body

|    Name     |  Status  |        |
| :---------: | :------: | :----: |
|  nama_desa  | Required | String |
| kepala_desa | Required | String |
| longtitude  | Required | String |
|  latitude   | Required | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin only)

```markdown
/desa/edit/[slug]
```

**Method : PUT**

Body

|    Name     |  Status  |        |
| :---------: | :------: | :----: |
|  nama_desa  | Optional | String |
| kepala_desa | Optional | String |
| longtitude  | Optional | String |
|  latitude   | Optional | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin only)

```markdown
/desa/delete/[slug]
```

**Method : DELETE**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/desa
```

**Method : GET**

## Tentang

#### Create (Admin only)

```markdown
/tentang/create
```

**Method : POST**

Body

|   Name    |  Status  |        |
| :-------: | :------: | :----: |
| deskripsi | Required | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin only)

```markdown
/tentang/edit/1
```

**Method : PUT**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Body

|   Name    |  Status  |        |
| :-------: | :------: | :----: |
| deskripsi | Optional | String |

#### List

```markdown
/tentang
```

**Method : GET**

## Album

#### Create (Admin only)

```markdown
/album/create
```

**Method : POST**

Body

|    Name    |  Status  |        |
| :--------: | :------: | :----: |
| nama_album | Required | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin only)

```markdown
/album/edit/[slug]
```

**Method : PUT**

Body

|    Name    |  Status  |        |
| :--------: | :------: | :----: |
| nama_album | Optional | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin only)

```markdown
/album/delete/[slug]
```

**Method : DELETE**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/album
```

**Method : GET**

## Galeri

#### Create (Admin only)

```markdown
/galeri/create
```

**Method : POST**

Body

|   Name    |  Status  |         |
| :-------: | :------: | :-----: |
| id_album  | Required | Integer |
|   nama    | Required | String  |
| deskripsi | Required | String  |
| thumbnail | Required |  File   |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin only)

```markdown
/galeri/edit/[slug]
```

**Method : PUT**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

Body

|   Name    |  Status  |         |
| :-------: | :------: | :-----: |
| id_album  | Optional | Integer |
|   nama    | Optional | String  |
| deskripsi | Optional | String  |
| thumbnail | Optional |  File   |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin only)

```markdown
/galeri/delete/[slug]
```

**Method : DELETE**

#### List

```markdown
/galeri
```

**Method : GET**

#### Detail

```markdown
/galeri/[slug]
```

**Method : GET**

## BUMD

#### Create (Admin Only)

```markdown
/bumd/create
```

**Method : POST**

Body

|      Name      |  Status  |         |
| :------------: | :------: | :-----: |
|  nomor_perdes  | Required | String  |
| tanggal_perdes | Required |  Date   |
|   keterangan   | Optional | String  |
|    id_desa     | Required | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin Only)

```markdown
/bumd/edit/[slug]
```

**Method : PUT**

Body

|      Name      |  Status  |         |
| :------------: | :------: | :-----: |
|  nomor_perdes  | Optional | String  |
| tanggal_perdes | Optional |  Date   |
|   keterangan   | Optional | String  |
|    id_desa     | Optional | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin Only)

```markdown
/bumd/delete/[slug]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List (Admin Only)

```markdown
/bumd
```

**Method : GET**

Params

| Name  |  Status  |         |
| :---: | :------: | :-----: |
| page  | Optional | Integer |
| limit | Optional | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## UMKM

#### Create (Admin Only)

```markdown
/umkm/create
```

**Method : POST**

Body

|     Name     |  Status  |         |
| :----------: | :------: | :-----: |
|    no_ktp    | Required | Integer |
|  nama_jalan  | Required | String  |
|     blok     | Required | String  |
|      no      | Required | Integer |
|      rt      | Required | Integer |
|      rw      | Required | Integer |
| jenis_produk | Required | String  |
| id_penduduk  | Required | Integer |
|   id_desa    | Required | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin Only)

```markdown
/umkm/edit/[slug]
```

**Method : PUT**

Body

|     Name     |  Status  |         |
| :----------: | :------: | :-----: |
|    no_ktp    | Optional | Integer |
|  nama_jalan  | Optional | String  |
|     blok     | Optional | String  |
|      no      | Optional | Integer |
|      rt      | Optional | Integer |
|      rw      | Optional | Integer |
| jenis_produk | Optional | String  |
| id_penduduk  | Optional | Integer |
|   id_desa    | Optional | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin Only)

```markdown
/umkm/delete/[slug]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List (Admin Only)

```markdown
/umkm
```

**Method : GET**

Params

|     Name     |  Status  |         |
| :----------: | :------: | :-----: |
|     page     | Optional | Integer |
|    limit     | Optional | Integer |
|   id_desa    | Optional | Integer |
| jenis_produk | Optional | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Sarana Keagamaan

#### Create (Admin Only)

```markdown
/sarana-keagamaan/create
```

**Method : POST**

Body

|    Name     |  Status  |         |
| :---------: | :------: | :-----: |
| nama_sarana | Required | String  |
|  pimpinan   | Required | String  |
|   alamat    | Required | String  |
| keterangan  | Required | String  |
|   id_desa   | Required | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin Only)

```markdown
/sarana-keagamaan/edit/[slug]
```

**Method : PUT**

Body

|    Name     |  Status  |         |
| :---------: | :------: | :-----: |
| nama_sarana | Optional | String  |
|  pimpinan   | Optional | String  |
|   alamat    | Optional | String  |
| keterangan  | Optional | String  |
|   id_desa   | Optional | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin Only)

```markdown
/sarana-keagamaan/delete/[slug]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/sarana-keagamaan
```

**Method : GET**

Params

|  Name   |  Status  |         |
| :-----: | :------: | :-----: |
|  page   | Optional | Integer |
|  limit  | Optional | Integer |
| id_desa | Optional | Integer |
|   key   | Optional | String  |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Agenda

#### Create (Admin Only)

```markdown
/agenda/create
```

**Method : POST**

Body

|    Name     |  Status  |         |
| :---------: | :------: | :-----: |
| nama_agenda | Required | String  |
|    start    | Required |  Time   |
|     end     | Required |  Time   |
|   tanggal   | Required |  Date   |
|   tempat    | Required | String  |
|  deskripsi  | Required | String  |
|  thumbnail  | Required |  File   |
|   id_desa   | Required | Integer |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Edit (Admin Only)

```markdown
/agenda/edit/[slug]
```

**Method : PUT**

Body

|    Name     |  Status  |         |
| :---------: | :------: | :-----: |
| nama_sarana | Optional | String  |
|  pimpinan   | Optional | String  |
|   alamat    | Optional | String  |
| keterangan  | Optional | String  |
|   id_desa   | Optional | Integer |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Delete (Admin Only)

```markdown
/agenda/delete/[slug]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/agenda
```

**Method : GET**

Params

| Name  |  Status  |         |                       |
| :---: | :------: | :-----: | :-------------------: |
| page  | Optional | Integer |                       |
| limit | Optional | Integer |                       |
|  key  | Optional | String  | Search by nama_agenda |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Detail

```markdown
/agenda/[dlug]
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Ormas

#### Create (Admin Only)

```markdown
/ormas/create
```

**Method : POST**

Body

|    Name     |  Status  |        |
| :---------: | :------: | :----: |
| nama_ormas  | Required | String |
| kepanjangan | Required | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin Only)

```markdown
/ormas/edit/[slug]
```

**Method : PUT**

Body

|    Name     |  Status  |        |
| :---------: | :------: | :----: |
| nama_ormas  | Optional | String |
| kepanjangan | Optional | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin Only)

```markdown
/ormas/delete/[slug]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List (Admin Only)

```markdown
/ormas
```

**Method : GET**

Params

| Name  |  Status  |         |
| :---: | :------: | :-----: |
| page  | Optional | Integer |
| limit | Optional | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Sekolah

#### Create (Admin Only)

```markdown
/sekolah/create
```

**Method : POST**

Body

|       Name        |  Status  |                   |
| :---------------: | :------: | :---------------: |
|   nama_sekolah    | Required |      String       |
|    kepanjangan    | Required |      String       |
|       npsn        | Required |      Integer      |
| bentuk_pendidikan | Required |      String       |
|      status       | Required | "swasta","negeri" |
|      alamat       | Required |      String       |
|      id_desa      | Required |      Integer      |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin Only)

```markdown
/sekolah/edit/[slug]
```

**Method : PUT**

Body

|       Name        |  Status  |                   |
| :---------------: | :------: | :---------------: |
|   nama_sekolah    | Optional |      String       |
|    kepanjangan    | Optional |      String       |
|       npsn        | Optional |      Integer      |
| bentuk_pendidikan | Optional |      String       |
|      status       | Optional | "swasta","negeri" |
|      alamat       | Optional |      String       |
|      id_desa      | Optional |      Integer      |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin Only)

```markdown
/sekolah/delete/[slug]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/sekolah
```

**Method : GET**

Params

|       Name        |  Status  |         |
| :---------------: | :------: | :-----: |
|       page        | Optional | Integer |
|       limit       | Optional | Integer |
|      id_desa      | Optional | Integer |
|      status       | Optional | String  |
| bentuk_pendidikan | Optional | String  |
|   nama_sekolah    | Optional | String  |


#### Detail

```markdown
/sekolah/[slug]
```

**Method : GET**

Params

| Name |  Status  |        |
| :--: | :------: | :----: |
| slug | Optional | String |


#### Total

```markdown
/sekolah/total
```

**Method : GET**

Params

|  Name  |  Status  |        |
| :----: | :------: | :----: |
| status | Optional | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Optional | String |

## Pegawai

#### Create (Admin Only)

```markdown
/pegawai/create
```

**Method : POST**

Body

|     Name      |  Status  |                 |
| :-----------: | :------: | :-------------: |
|     nama      | Required |     String      |
| tempat_lahir  | Required |     String      |
| tanggal_lahir | Required |      Date       |
|    no_ktp     | Required |     Integer     |
|     no_hp     | Required |     Integer     |
|    status     | Required | "ASN","NON ASN" |
| jenis_kelamin | Required |     String      |
|     agama     | Required |     String      |
| status_kawin  | Required |     String      |
|    jabatan    | Required |     String      |
|    pangkat    | Required |     String      |
|    pangkat    | Required |     String      |
|  pendidikan   | Required |     String      |
|    alamat     | Required |     String      |
|     email     | Required |     String      |
|   pass_foto   | Required |     String      |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin Only)

```markdown
/pegawai/edit/[slug]
```

**Method : PUT**

Body

|     Name      |  Status  |                 |
| :-----------: | :------: | :-------------: |
|     nama      | Optional |     String      |
| tempat_lahir  | Optional |     String      |
| tanggal_lahir | Optional |      Date       |
|    no_ktp     | Optional |     Integer     |
|     no_hp     | Optional |     Integer     |
|    status     | Optional | "ASN","NON ASN" |
| jenis_kelamin | Optional |     String      |
|     agama     | Optional |     String      |
| status_kawin  | Optional |     String      |
|    jabatan    | Optional |     String      |
|    pangkat    | Optional |     String      |
|    pangkat    | Optional |     String      |
|  pendidikan   | Optional |     String      |
|    alamat     | Optional |     String      |
|     email     | Optional |     String      |
|   pass_foto   | Optional |     String      |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin Only)

```markdown
/pegawai/delete/[slug]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List (Admin Only)

```markdown
/pegawai
```

**Method : GET**
Params

|  Name  |  Status  |         |                |
| :----: | :------: | :-----: | :------------: |
|  page  | Optional | Integer |                |
| limit  | Optional | Integer |                |
|  key   | Optional | String  | Search by nama |
| status | Optional | String  |                |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Detail (Admin Only)

```markdown
/pegawai/[slug]
```

**Method : GET**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Total

```markdown
/pegawai/total
```

**Method : GET**
Params

|  Name  |  Status  |        |
| :----: | :------: | :----: |
| status | Optional | String |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

## Kesehatan

#### Create (Admin only)

```markdown
/kesehatan/create
```

**Method : POST**

Body

|   Name    |  Status  |         |
| :-------: | :------: | :-----: |
|   nama    | Required | String  |
| deskripsi | Required | String  |
|    web    | Optional | String  |
|   maps    | Required | String  |
|  kontak   | Required | String  |
|  id_desa  | Required | Integer |
| thumbnail | Required |  File   |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Edit (Admin only)

```markdown
/kesehatan/edit/[slug]
```

**Method : PUT**

Body

|   Name    |  Status  |         |
| :-------: | :------: | :-----: |
|   nama    | Optional | String  |
| deskripsi | Optional | String  |
|    web    | Optional | String  |
|   maps    | Optional | String  |
|  kontak   | Optional | String  |
|  id_desa  | Optional | Integer |
| thumbnail | Optional |  File   |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Delete (Admin only)

```markdown
/kesehatan/delete/[slug]
```

**Method : DELETE**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/kesehatan
```

**Method : GET**

Params

| Name  |  Status  |         |                |
| :---: | :------: | :-----: | :------------: |
| page  | Optional | Integer |                |
| limit | Optional | Integer |                |
|  key  | Optional | String  | Search by nama |

#### Detail

```markdown
/kesehatan/[slug]
```

**Method : GET**

## Traffic

#### Create

```markdown
/traffic/create
```

**Method : POST**

#### Total Pengunjung

```markdown
/traffic/total-pengunjung
```

**Method : GET**

#### Total Penduduk Terdaftar

```markdown
/traffic/total-pendaftar
```

**Method : GET**

## Kontak

#### Create (Admin only)

```markdown
/kontak/create
```

**Method : POST**

Body

| Name  |  Status  |         |
| :---: | :------: | :-----: |
| nama  | Required | String  |
| no_hp | Required | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Edit (Admin only)

```markdown
/kontak/edit/[slug]
```

**Method : PUT**

Body

| Name  |  Status  |         |
| :---: | :------: | :-----: |
| nama  | Optional | String  |
| no_hp | Optional | Integer |

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### Delete (Admin only)

```markdown
/kontak/delete/[slug]
```

**Method : DELETE**

Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/kontak
```

**Method : GET**

## Slider

#### Create (Admin only)

```markdown
/slider/create
```

**Method : POST**

Body

|   Name    |  Status  |        |
| :-------: | :------: | :----: |
|   judul   | Required | String |
| deskripsi | Required | String |
| thumbnail | Required |  File  |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Edit (Admin only)

```markdown
/slider/edit/[slug]
```

**Method : PUT**

Body

|   Name    |  Status  |        |
| :-------: | :------: | :----: |
|   judul   | Optional | String |
| deskripsi | Optional | String |
| thumbnail | Optional |  File  |

Headers

|     Name      |  Status  |                     |
| :-----------: | :------: | :-----------------: |
| Content-Type  | Required | multipart/form-data |
| Authorization | Required |       String        |

#### Delete (Admin only)

```markdown
/slider/delete/[slug]
```

**Method : DELETE**
Headers

|     Name      |  Status  |        |
| :-----------: | :------: | :----: |
| Authorization | Required | String |

#### List

```markdown
/slider
```

**Method : GET**

Params

| Name  |  Status  |         |                 |
| :---: | :------: | :-----: | :-------------: |
| page  | Optional | Integer |                 |
| limit | Optional | Integer |                 |
|  key  | Optional | String  | Search by judul |

#### Detail

```markdown
/slider/[slug]
```

**Method : GET**
