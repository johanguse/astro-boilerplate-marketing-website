import type { ContactFormData } from '@/types/contact';

export function validateContactForm(data: any): {
    success: boolean;
    data?: ContactFormData;
    error?: string;
} {
    if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
        return { success: false, error: 'Name is required' };
    }
    
    if (!data.email || typeof data.email !== 'string' || !/^\S+@\S+\.\S+$/.test(data.email)) {
        return { success: false, error: 'Valid email is required' };
    }
    
    if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
        return { success: false, error: 'Message is required' };
    }
    
    if (!data['cf-turnstile-response'] || typeof data['cf-turnstile-response'] !== 'string' || data['cf-turnstile-response'].trim().length === 0) {
        return { success: false, error: 'Turnstile verification is required' };
    }

    return {
        success: true,
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
            'cf-turnstile-response': data['cf-turnstile-response'],
        },
    };
}
