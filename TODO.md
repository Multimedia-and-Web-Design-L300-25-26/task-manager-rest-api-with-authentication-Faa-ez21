# TODO - Task Manager REST API Implementation

## Step 1: Implement User Model ✅
- [x] Add name field (String, required)
- [x] Add email field (String, required, unique)
- [x] Add password field (String, required, minlength 6)
- [x] Add createdAt field (default Date.now)

## Step 2: Implement Task Model ✅
- [x] Add title field (String, required)
- [x] Add description field (String)
- [x] Add completed field (Boolean, default false)
- [x] Add owner field (ObjectId, ref "User", required)
- [x] Add createdAt field (default Date.now)

## Step 3: Implement Auth Middleware ✅
- [x] Extract token from Authorization header
- [x] Verify token
- [x] Find user
- [x] Attach user to req.user
- [x] Call next()
- [x] Return 401 if invalid

## Step 4: Implement Auth Routes ✅
- [x] POST /api/auth/register - Validate input, check user exists, hash password, save user, return user (without password)
- [x] POST /api/auth/login - Find user, compare password, generate JWT, return token

## Step 5: Implement Task Routes ✅
- [x] POST /api/tasks - Create task with owner = req.user._id
- [x] GET /api/tasks - Return only tasks belonging to req.user
- [x] DELETE /api/tasks/:id - Check ownership, delete task

## Step 6: Test ✅
- [x] Run npm test to verify all tests pass
- All 5 tests passed!

