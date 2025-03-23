export interface ApiResponse {
    data: any;
    metadata: { success: boolean, error: string | null }
}