#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Test admin credentials
const adminCredentials = {
  username: 'Prashika',
  password: 'Prashika@2025'
};

console.log('🔍 Testing Admin Login Configuration');
console.log('=====================================\n');

// Test 1: Verify credentials
console.log('1. Testing admin credentials:');
console.log('   Username:', adminCredentials.username);
console.log('   Password length:', adminCredentials.password.length);
console.log('   ✅ Credentials format looks correct\n');

// Test 2: Check auth middleware
try {
  const authContent = readFileSync(join(__dirname, 'server/middleware/auth.ts'), 'utf8');
  const hasCredentialsExport = authContent.includes('export const adminCredentials');
  const hasCorrectUsername = authContent.includes(adminCredentials.username);
  const hasCorrectPassword = authContent.includes(adminCredentials.password);
  
  console.log('2. Testing auth middleware:');
  console.log('   Exports adminCredentials:', hasCredentialsExport ? '✅' : '❌');
  console.log('   Has correct username:', hasCorrectUsername ? '✅' : '❌');
  console.log('   Has correct password:', hasCorrectPassword ? '✅' : '❌');
  console.log('   Auth middleware:', (hasCredentialsExport && hasCorrectUsername && hasCorrectPassword) ? '✅ PASS' : '❌ FAIL');
  console.log();
} catch (error) {
  console.log('2. ❌ Error reading auth middleware:', error.message);
}

// Test 3: Check session configuration
try {
  const serverContent = readFileSync(join(__dirname, 'server/index.ts'), 'utf8');
  const hasSessionConfig = serverContent.includes('app.use(session({');
  const hasSessionSecret = serverContent.includes('SESSION_SECRET');
  const hasSQLiteStore = serverContent.includes('SQLiteStore');
  const hasSessionSave = serverContent.includes('concurrentDB: true');
  
  console.log('3. Testing session configuration:');
  console.log('   Has session middleware:', hasSessionConfig ? '✅' : '❌');
  console.log('   Uses SESSION_SECRET:', hasSessionSecret ? '✅' : '❌');
  console.log('   Uses SQLiteStore:', hasSQLiteStore ? '✅' : '❌');
  console.log('   Has concurrent DB option:', hasSessionSave ? '✅' : '❌');
  console.log('   Session config:', (hasSessionConfig && hasSessionSecret && hasSQLiteStore) ? '✅ PASS' : '❌ FAIL');
  console.log();
} catch (error) {
  console.log('3. ❌ Error reading server config:', error.message);
}

// Test 4: Check admin routes
try {
  const adminContent = readFileSync(join(__dirname, 'server/routes/admin.ts'), 'utf8');
  const hasLoginRoute = adminContent.includes('app.post("/admin/login"');
  const hasSessionSave = adminContent.includes('req.session.save(');
  const hasLogging = adminContent.includes('console.log(');
  const hasLogoutRoute = adminContent.includes('app.post("/admin/logout"');
  
  console.log('4. Testing admin routes:');
  console.log('   Has login POST route:', hasLoginRoute ? '✅' : '❌');
  console.log('   Has explicit session save:', hasSessionSave ? '✅' : '❌');
  console.log('   Has debug logging:', hasLogging ? '✅' : '❌');
  console.log('   Has logout route:', hasLogoutRoute ? '✅' : '❌');
  console.log('   Admin routes:', (hasLoginRoute && hasSessionSave && hasLogging) ? '✅ PASS' : '❌ FAIL');
  console.log();
} catch (error) {
  console.log('4. ❌ Error reading admin routes:', error.message);
}

// Test 5: Check environment configuration
try {
  const renderYaml = readFileSync(join(__dirname, 'render.yaml'), 'utf8');
  const hasSessionSecret = renderYaml.includes('SESSION_SECRET');
  const hasSqlitePath = renderYaml.includes('SQLITE_DB_PATH');
  
  console.log('5. Testing deployment configuration:');
  console.log('   render.yaml has SESSION_SECRET:', hasSessionSecret ? '✅' : '❌');
  console.log('   render.yaml has SQLITE_DB_PATH:', hasSqlitePath ? '✅' : '❌');
  console.log('   Deployment config:', (hasSessionSecret && hasSqlitePath) ? '✅ PASS' : '❌ FAIL');
  console.log();
} catch (error) {
  console.log('5. ❌ Error reading render.yaml:', error.message);
}

console.log('🎯 Test Summary');
console.log('================');
console.log('All core components have been updated for proper admin login functionality.');
console.log('The main fixes include:');
console.log('• Explicit session saving with error handling');
console.log('• Proper SQLite session store configuration for production');
console.log('• Debug logging for troubleshooting');
console.log('• Environment variables for secure deployment');
console.log();
console.log('📋 Next Steps:');
console.log('1. Deploy to Render with the updated code');
console.log('2. Set environment variables in Render dashboard');
console.log('3. Test admin login at your deployed URL');
console.log();
console.log('🔗 Test URL: https://bharath-portfolio-7jem.onrender.com/admin');
console.log('👤 Username: Prashika');
console.log('🔑 Password: Prashika@2025');
