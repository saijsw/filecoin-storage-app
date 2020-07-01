/*
 * Copyright 2020 Ievgen Pervushyn
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const service = {
    startRetrieving: (cid: string): Error | null => {
        return null
    },
    initiateStoring: (cid: string, duration: number, redundancy: number): Error | null => {
        return null
    },
    uploadFile: (data: any): Error | null => {
        return null
    },
    downloadFile: (cid: string): Error | null => {
        return null
    },
}
