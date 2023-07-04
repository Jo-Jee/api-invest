import { Injectable } from '@nestjs/common';
import { createCipheriv } from 'crypto';

@Injectable()
export class CryptoService {
  private key = Buffer.from(process.env.ENCRYPT_KEY);
  private iv = Buffer.from(process.env.ENCRYPT_IV);

  encrypt(text: string): string {
    const cipher = createCipheriv('aes-256-cbc', this.key, this.iv);

    let encryptedText = cipher.update(text, 'utf8', 'base64');
    encryptedText += cipher.final('base64');

    return encryptedText;
  }
}
