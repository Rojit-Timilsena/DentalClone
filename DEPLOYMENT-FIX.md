# Deployment Node.js Version Fix

## Problem
Deployment failing with error: `Version '22' not found - try 'nvm ls-remote' to browse available versions.`

## Root Cause
The deployment platform was trying to use Node.js version 22, which doesn't exist. The latest stable versions are in the 20.x range.

## Solution Applied

### 1. Added .nvmrc file
```
20.19.6
```
This tells deployment platforms which Node.js version to use.

### 2. Updated package.json with engines
```json
"engines": {
  "node": ">=18.0.0",
  "npm": ">=8.0.0"
}
```
This specifies the minimum Node.js and npm versions required.

### 3. Created platform-specific configs

#### Netlify (netlify.toml)
```toml
[build.environment]
  NODE_VERSION = "20.19.6"
  NPM_VERSION = "10.2.4"
```

#### Vercel (vercel.json)
```json
{
  "functions": {
    "app/api/**/*.js": {
      "runtime": "nodejs20.x"
    }
  }
}
```

## Deployment Instructions

### For Netlify:
1. The `netlify.toml` file will automatically set the Node.js version
2. Build command: `npm run build`
3. Publish directory: `dist`

### For Vercel:
1. The `vercel.json` file specifies Node.js 20.x runtime
2. Build command: `npm run build`
3. Output directory: `dist`

### For Other Platforms:
1. Use the `.nvmrc` file to specify Node.js version
2. Ensure the platform supports Node.js 20.x
3. Set build command to `npm run build`
4. Set output/publish directory to `dist`

## Verification
✅ Local build tested and working
✅ Node.js version files created
✅ Platform-specific configs added
✅ All animations and functionality preserved

## Available Node.js Versions
- Node.js 18.x (LTS)
- Node.js 20.x (Current LTS) ← **Recommended**
- Node.js 21.x (Current)

**Note:** Node.js version 22 does not exist. The deployment platform may have been misconfigured or using an invalid version specification.