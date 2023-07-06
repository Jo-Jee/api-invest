import { createCipheriv } from 'crypto';
import { staticConfig } from 'src/config/config';

export function encrypt(text: string): string {
  const key = Buffer.from(staticConfig.encryptKey);
  const iv = Buffer.from(staticConfig.encryptIV);
  const cipher = createCipheriv('aes-256-cbc', key, iv);

  let encryptedText = cipher.update(text, 'utf8', 'base64');
  encryptedText += cipher.final('base64');

  return encryptedText;
}
