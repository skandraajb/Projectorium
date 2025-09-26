// server/routes/user.js
import bcrypt from 'bcryptjs';
import express from 'express';
import { User } from '../models/user.js';

const router = express.Router();

// === CREATE: Signup ===
router.post('/signup', async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
      console.log('Signup failed: Missing required fields');
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(`Signup failed: User already exists for email ${email}`);
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, phone, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// === LOGIN ===
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log('Login failed: Missing email or password');
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log(`Login failed: No user found for email ${email}`);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    if (!user.password) {
      console.error(`Login error: No password set for user ${email}`);
      return res.status(500).json({ message: 'User account issue. Please contact support.' });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      console.log(`Login failed: Invalid password for email ${email}`);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// === READ: Get all users ===
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// === READ: Get user by ID ===
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      console.log(`Get user failed: No user found for ID ${req.params.id}`);
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Error fetching user' });
  }
});

// === UPDATE: Update user by ID ===
router.put('/:id', async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    if (!name && !phone && !email && !password) {
      console.log('Update user failed: No fields provided');
      return res.status(400).json({ message: 'At least one field is required' });
    }

    const updateData = { name, phone, email };
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).select('-password');

    if (!updatedUser) {
      console.log(`Update user failed: No user found for ID ${req.params.id}`);
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated', user: updatedUser });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ message: 'Error updating user' });
  }
});

// === DELETE: Delete user by ID ===
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) {
      console.log(`Delete user failed: No user found for ID ${req.params.id}`);
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

// === GET USER COUNT ===
router.get('/count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Get user count error:', error);
    res.status(500).json({ message: 'Error getting user count' });
  }
});

export default router;