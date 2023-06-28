import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-chatbot',
  templateUrl: 'chatbot.page.html',
  styleUrls: ['chatbot.page.scss']
})
export class ChatbotPage {

  message: string = "";
  displayMessages: string[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  sendMessage() {
    this.displayMessages.push(this.message);
  }

}
