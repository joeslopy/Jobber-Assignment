# Project to increment versions

## Introduction

This project increments a semver string eg 1.2.3 -> 1.2.4.

This project requires Node.js and yarn to run. Please follow instruction steps 1-3 for yarn and Node.js installation if you do not have them installed, or skip to step #4 after reading step 0 if you already have them installed.

## Installation Instructions

### 0. Downloading the project

#### Zip file

1. Unzip the file on your machine
2. Navigate to the project directory

#### Cloning from git

1. Please visit [My Github page](https://github.com/joeslopy/Jobber-Assignment)
2. You can clone the repository by running:

```bash
git clone https://github.com/joeslopy/Jobber-Assignment.git
```

3. Navigate the project directory

### 1. Installing Node.js

#### Windows/macOS

1. Go to the [official Node.js website](https://nodejs.org/).
2. Download the latest LTS version for your operating system (recommended).
3. Run the installer and follow the prompts.

#### Linux

For Linux, Node.js can be installed using a package manager like `apt` (for Ubuntu/Debian) or `dnf` (for Fedora). Here are examples for Ubuntu/Debian:

```bash
# Update package index
sudo apt update

# Install Node.js
sudo apt install nodejs

# Verify the installation
node -v
```

Alternatively, you can install it via [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) to manage multiple versions of Node.js.

I would reccomend using Node.js version 20 or higher as that is what I used in development.

### 2. Installing Yarn

#### Windows/macOS

1. **Using npm :**

   If you already have Node.js or npm installed, you can install Yarn globally via npm:

   ```bash
   npm install -g yarn
   ```

2. **Alternatively, using the Yarn installation script:**

   - On macOS, you can use Homebrew:

     ```bash
     brew install yarn
     ```

   - On Windows, use the official Yarn installer from [Yarn's website](https://yarnpkg.com/getting-started/install).

#### Linux

For Ubuntu/Debian-based systems:

```bash
# Configure the Yarn APT repository
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

# Add the Yarn APT repository to your system
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

# Update package index
sudo apt update

# Install Yarn
sudo apt install yarn

# Verify installation
yarn --version
```

Alternatively, you can install Yarn via [npm](https://www.npmjs.com/package/yarn):

```bash
npm install -g yarn
```

### 3. Verify Installations

Once both Node.js and Yarn are installed, verify the versions to ensure everything is set up properly:

- **Node.js**: Run `node -v` to check the installed version of Node.js.
- **Yarn**: Run `yarn --version` to check the installed version of Yarn.

### 4. Installing Project Dependencies

After installing Node.js and Yarn, you can install the dependencies for this project.

1. Navigate to the project directory in your terminal.
2. Run the following command to install the project's dependencies:

   ```bash
   yarn install
   ```

---

## Running the Project

As this is a typescript project you will have to build the project before running it.

Please either start the development server, or build the project before running any commands.

I would suggest opening another terminal if you elect to start the development server, so that you can input commands into the first terminal.

- **Start the development server**:

  ```bash
  yarn start
  ```

- **Build the project**:

  ```bash
  yarn build
  ```

- **Run tests**:

  ```bash
  yarn test
  ```

- **Use CLI to increment version**:

  ```bash
  yarn increment
  ```

---

## Troubleshooting

- **"Command not found" for `yarn` or `node`**:
  - Ensure that Node.js and Yarn are properly installed and that they are included in your system's PATH.
- **Yarn installation issues**:
  - If you encounter issues during installation, refer to the [Yarn installation guide](https://yarnpkg.com/getting-started/install).

---

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Yarn Documentation](https://yarnpkg.com/en/docs)
