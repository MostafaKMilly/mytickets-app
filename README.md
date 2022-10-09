# My Tickets

Simple React project managment application

### Folder structure


```
src/
├── client/
│   └── api.ts
├── layouts/
│   ├── DashboardLayout.tsx
│   └── ...
├── shared/
│   ├── components/
│   ├── hooks/
│   └── types/
├── data/
│   ├── Store.ts
│   └── slices/
│       ├── userSlice.ts
│       └── ...
└── pages/
    ├── login/
    │   ├── components/
    │   │   ├── LoginForm.tsx
    │   │   └── ...
    │   ├── hooks/
    │   │   ├── useLogin.ts
    │   │   └── ...
    │   ├── types/
    │   ├── Login.tsx
    │   └── index.ts
    ├── project/
    │   ├── components/
    │   ├── hooks/
    │   ├── views/
    │   │   └── ...
    │   ├── types/
    │   ├── Project.tsx
    │   └── index.ts
    ├── ....
    ├── routes/
    │   └── Routes.tsx
    ├── themes/
    │   └── BaseTheme.ts
    ├── App.tsx
    └── index.tsx
```