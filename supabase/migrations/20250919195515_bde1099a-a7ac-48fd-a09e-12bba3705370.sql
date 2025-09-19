-- Add driving license fields to profiles table
ALTER TABLE public.profiles 
ADD COLUMN license_number TEXT,
ADD COLUMN license_type_a BOOLEAN DEFAULT FALSE,
ADD COLUMN license_type_a1 BOOLEAN DEFAULT FALSE,
ADD COLUMN license_type_a2 BOOLEAN DEFAULT FALSE,
ADD COLUMN license_type_b BOOLEAN DEFAULT FALSE;