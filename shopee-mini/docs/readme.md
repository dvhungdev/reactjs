
# Mino Project: Shopee-mini

### Thiết lập môi trường.

#### 1. Setup Reactjs App.
```
npx create-react-app shopee-mini
```
https://reactjs.org/docs/create-a-new-react-app.html

#### 2. Thêm các thư viện cơ bản

Thư viện viết SCSS
```
npm i --save-dev node-sass
```
Thư viện quản lý Router

```
npm i --save react-router-dom
```
Thư viện UI
```
npm install antd
```


#### 3. Tổ chức folder


```
src
|__ assets
|  |__ images
|  |__ styles (global styles) 
|
|__ components (shared components)
|__ apis
  |__ axiosClient.js
  |__ productApi.js
|__ constants
  |__ common.js
  |__ images.js
  |__ global.js
  |__ endPoint.js
  |__ enumeration.js
  |__ errorCode.js
|__ utilities.js
  |__ converter.js
  |__ validate.js
  |__ utilityNumber.js
  |__ utilityString.js
  |__ utilityDatetime.js
|
|__ features
  |__ Product
    |__ components
    |  |__ ProductList
    |  |__ ProductCard
    |
    |__ pages
    |  |__ MainPage
    |  |__ SearchPage
    |__ productSlice.js
    |__ index.js

```
**Tổ chức routing**
* Sử dụng kĩ thuật lazy load components.
* Load theo features.

```
// App.js
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/user" component={User} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
```

.




