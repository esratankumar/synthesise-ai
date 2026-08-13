import { publish } from "@/lib/enterprise/eventBus";

export interface RecoveryRecord {

  module: string;

  attempts: number;

  recovered: boolean;

}

const recoveryLog: RecoveryRecord[] = [];

export async function executeWithRecovery(

  moduleName: string,

  task: () => Promise<any>,

  maxRetries = 3

) {

  let attempts = 0;

  while (attempts < maxRetries) {

    attempts++;

    try {

      const result = await task();

      recoveryLog.unshift({
        module: moduleName,
        attempts,
        recovered: attempts > 1,
      });

      publish({
        type: "Recovery",
        message: `${moduleName} recovered after ${attempts} attempt(s)`,
        timestamp: new Date().toLocaleTimeString(),
      });

      return result;

    } catch {

      if (attempts >= maxRetries) {

        recoveryLog.unshift({
          module: moduleName,
          attempts,
          recovered: false,
        });

        publish({
          type: "Recovery",
          message: `${moduleName} failed after ${attempts} retries`,
          timestamp: new Date().toLocaleTimeString(),
        });

        throw new Error(`${moduleName} recovery failed`);

      }

    }

  }

}

export function getRecoveryLog() {

  return recoveryLog;

}
