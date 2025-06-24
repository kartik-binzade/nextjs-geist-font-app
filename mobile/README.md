# PocketPilot Mobile App

## Development

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run web  # for web version
npm run ios  # for iOS
npm run android  # for Android
```

### Important Notes

#### Shadow Styling
This project uses a custom cross-platform shadow styling solution. You may see development-only warnings related to shadow styling in the web version. These warnings are expected and don't affect functionality. See [Shadow Styling Documentation](./docs/SHADOW_STYLING.md) for details.

### Project Structure

```
mobile/
├── src/
│   ├── components/     # Reusable components
│   ├── screens/       # Screen components
│   ├── navigation/    # Navigation configuration
│   ├── context/       # React Context providers
│   └── utils/         # Utility functions and helpers
├── docs/             # Project documentation
└── README.md
```

### Development Guidelines

1. Use TypeScript for all new files
2. Follow the existing project structure
3. Document any complex implementations
4. Test across both web and native platforms

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is private and confidential.
