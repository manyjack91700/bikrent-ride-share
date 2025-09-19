-- Add postal_code column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN postal_code TEXT NOT NULL DEFAULT '';

-- Update the handle_new_user function to include postal_code
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    user_id,
    first_name,
    last_name,
    phone,
    email,
    street,
    city,
    postal_code,
    birth_date
  ) VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'first_name', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'last_name', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'phone', ''),
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data ->> 'street', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'city', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'postal_code', ''),
    COALESCE((NEW.raw_user_meta_data ->> 'birth_date')::date, '1990-01-01'::date)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;