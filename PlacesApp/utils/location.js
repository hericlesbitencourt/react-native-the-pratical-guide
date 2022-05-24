const GOOGLE_API_KEY = 'my-apy-key';

export function getMapPreview(latitude, longitude) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${latitude},${longitude}
&key=${GOOGLE_API_KEY}&signature=YOUR_SIGNATURE`;

  return imagePreviewUrl;
}
