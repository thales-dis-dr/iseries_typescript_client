# iSeries Typescript Client Example

This example application shows how to connect to and capture from an iSeries document scanner using typescript and node.js.

The client will attempt to connect to the iSeries scanner using the settings from `config/settings.json5`. It will authenticate, send capture commands, and process the results.

## References

- [iSeries Documentation](https://docs.drcloud.ue1.ibs28.acloud.thalescloud.io/#/iseriies)
- [iseriesreader.com](https://portal.drcloud.ue1.ibs28.acloud.thalescloud.io/#/iseriies)
- [Specifications](https://www.thalesgroup.com/en/markets/digital-identity-and-security/government/document-readers)

## Features

- Connects to an iSeries document scanner via WebSocket
- Sends and receives messages using the "DRMCL" protocol
- Handles device authentication and certificate management
- Parses and processes scanner data

## Project Structure

```
 . 
 ├── config/        # Configuration files and certificates 
 ├── src/           # TypeScript source code
 │ ├── Config.mts
 │ ├── DeviceConnection.mts
 │ ├── Message.mts
 │ ├── index.mts    # Entry point 
 │ └── drmcl/       # DRMCL protocol message handlers 
 ├── package.json   # Project metadata and scripts 
 ├── tsconfig.json  # TypeScript configuration 
 └── Readme.md      # Project documentation
```


### Code Overview

- [`src/DeviceConnection.mts`](src/DeviceConnection.mts): Manages the WebSocket connection to the scanner.
- [`src/Config.mts`](src/Config.mts): Loads and parses configuration files.
- [`src/Message.mts`](src/Message.mts): Defines message structures and utilities.
- [`src/drmcl/`](src/drmcl/): Contains protocol-specific message handlers and result parsers.

# Getting Started

### Prerequisites

- Node.js (v23 or later)
- npm

### Installation

1. Clone the repository:
```sh
git clone https://github.com/thales-dis-dr/iseries_typescript_client
cd iSeries_websocket_client
```

2. Install dependencies:
```sh
npm install
```

### Configuration

- Create a configuration files in the `config/` directory called `settings.json5`.
- Add a `devices` section to the configuration along with its `ApiId` and `ApiKey` values.
```json
{
  "devices": [
    {
      "address": "192.168.0.231",
      "apiId": "test",
      "apiKey": "test"
    }
  ]
}
```

### Running the Client

To start the client, run:
```sh
npm start
```

### Debugging

To start the client using tsx in watch mode, run:

```sh
npm run dev
```

