# Multiple Pages 

In this project, I created a Multiple Pages using React Router Dom in React JS + Talwind CSS

## Preview

#### Preview Dekstop
![Preview](./src/assets/image.png)

#### Preview Mobile
![Preview](./src/assets/preview-mobile.png)


## How to Run This Project

### 1. Manually
1. Clone the repository:
   ```bash
   git clone https://github.com/VsalCode/fgo24-react-pages.git
   ```

2. Navigate to the project folder:
   ```bash
   cd fgo24-react-pages
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port shown in the terminal).

### 2. With Docker
1. Clone the repository:
   ```bash
   git clone https://github.com/VsalCode/fgo24-react-pages.git
   ```

2. Navigate to the project folder:
   ```bash
   cd fgo24-react-pages
   ```

3. Build the Docker image:
   ```bash
   docker build . -t pages:latest
   ```

4. Run the Docker container:
   ```bash
   docker run -p 8080:80 -d pages:latest
   ```

5. Visit the app at `http://localhost:8080`.

## Dependencies
- Vite + React JS
- React Icons
- Tailwind
- React Router DOM

## How to Contribute
Pull requests are welcome! For major changes, please open an issue first to discuss your proposed changes. Ensure tests are updated as needed.

## License
[MIT](https://opensource.org/license/mit)