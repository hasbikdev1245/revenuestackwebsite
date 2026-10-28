# RevenueStack

Website for RevenueStack, a backend growth partner for 7 and 8 figure info and agency businesses.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Applications

The apply form opens an email draft. Set the receiving address in `lib/content.js`:

```js
export const site = {
  name: "RevenueStack",
  inbox: "you@yourdomain.com",
};
```
