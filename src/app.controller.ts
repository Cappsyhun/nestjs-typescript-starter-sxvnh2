import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { Response as Res } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-type', 'text/x-vcalendar; charset=utf-8')
  @Header('Content-Disposition', 'attachment; filename="iphonecontact.ics";')
  getHello(): string {
    return 'QkVHSU46VkNBUkQgVkVSU0lPTjozLjAgTjpTb21hOyBSw7xjc2vDtnMgRk46IFLDvGNza8O2cyBTb21hIE9SRzpEZWJ1ZyBFbnRpdHkgS2Z0LiBUSVRMRTpGYXJva2tlcmdldMWRIGNzaW1wb2vDs21lc3RlciBBRFI6Ozthc2Q7YXNkO2FzZDthc2Q7YXNkIFRFTDtXT1JLO1ZPSUNFOiBURUw7Q0VMTDogVEVMO0ZBWDogRU1BSUw7V09SSztJTlRFUk5FVDpzb21hLnJ1Y3Nrb3MuYS5mZWplbUBkZWJ1Z2VudGl0eS5odSBVUkw6aHR0cHM6Ly9kZWJ1Z2VudGl0eS5odSBFTkQ6VkNBUkQ=';
  }
}
