# The license of the code belongs to Waterford Institute of Technology and
# Centre for the Advancement of Learning of Maths, Science and Technology, Ireland.

from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Button import Button
from pyjamas import Window
from pyjamas.ui import HasAlignment
from pyjamas.Canvas import Color
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.FlexTable import FlexTable
import random
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Image import Image
from pyjamas.Timer import Timer




# WinScore = 0
DiceInstance = 0

class IntroPage:

    def __init__(self):
        self.DPanel = DockPanel(HorizontalAlignment = HasAlignment.ALIGN_CENTER,
                         Spacing=10) # Creates the Docker Panel Instance
        self.VPanel = VerticalPanel() # Creates the Vertical Panel Instance
        self.VPanel1 = VerticalPanel() # Creates the Vertical Panel Instance
        self.HPanel = HorizontalPanel() # Creates a Horizontal Panel Instance
        self.HPanel1 = HorizontalPanel()# Creates a Horizontal Panel Instance


        self.image=Image()#Creates the Image instance to embed the images of dice
        self.DummyUrl = self.image.getUrl() 
        self.timer = Timer(notify=self.StillImage)#Timer for display of gif animation
        self.timerRButton =  Timer(notify=self.OneAlert)#Timer for controlling states of Roll button 
                                                        #whenever the output of the dice is 1

        self.RollButton = Button("Roll", getattr(self, "RollButtonPressed")) #Initially Disabled 
        self.RollButton.setEnabled(False)
        self.BankButton = Button("Bank", getattr(self, "BankButtonPressed")) #Initially Disabled 
        self.BankButton.setEnabled(False)
        #The start button controls both the number players as well the winning score
        self.StartButton = Button("Start", getattr(self, "StartButtonPressed")) #Intially Enabled
        self.StartButton.setEnabled(True)


        self.PlayerNum = TextBox() #Enter the Number of Players
        self.WinScore = TextBox() #Enter the Target Score
        self.PlayerNum.setText("0")
        self.WinScore.setText("0")
        # self.OK = Button("OK", getattr(self, "okButtonPressed"))

        self.NameScore = FlexTable() #main score board
        self.NameScore.setStyleName("NameScore")
        self.TempBoard = FlexTable() #Temporary score board
        self.TempBoard.setStyleName("TempBoard")

        self.VarTempScore = 0 #Temporary Score Variable
        self.VarTotScore = [] #Total Score Variable
        self.CountTurn = 1 #Count to display player number in Temporary Score Board

        self.TxtInstructions = HTML()

    def StartButtonPressed(self):
       
        self.CountTurn = 1
        if int(self.PlayerNum.getText()) >= 2 and int(self.PlayerNum.getText()) <= 6 and int(self.WinScore.getText()) >= 10 and int(self.WinScore.getText()) <= 100:
            
            self.DPanel.remove(self.TxtInstructions, DockPanel.CENTER)
            self.BankButton.setVisible(True)
            self.RollButton.setVisible(True)
            # self.image.setVisible(True)
            self.TempBoard.setVisible(True)
            self.NameScore.setVisible(True)
            self.image = Image( self.DummyUrl + "images/0.png")
            self.image.setSize("200px", "300px")
            self.DPanel.add(self.image, DockPanel.CENTER)
            RootPanel().add(self.DPanel)




            self.StartButton.setEnabled(False)
            self.PlayerNum.setEnabled(False)
            self.WinScore.setEnabled(False)
            self.RollButton.setEnabled(True)
            self.TempBoard.setText(1,0,"Player"+str(1))
            self.TempBoard.setText(1, 1, "0")
            self.NameScore.getRowFormatter().addStyleName(self.CountTurn,"Rows");
        else:
            Window.alert("Please Enter Correct Parameters " ) #Command for alert window
            return 0

        
        VarPlayer = ["Player" + str(i) for i in xrange(1,int(self.PlayerNum.getText())+1)]

        i = 0
        while i < int(self.PlayerNum.getText()):
            self.NameScore.setText(i+1, 0, VarPlayer[i])
            self.NameScore.setText(i+1, 1, "0")
            self.VarTotScore.append(0) #m*1 vector of zeros indicating the initial scores 
            i += 1

    def OneAlert(self):
        AlrtTxt = " Sorry, your turn is over"
        Window.alert(AlrtTxt)
        self.timerRButton.cancel()
        self.RollButton.setEnabled(True)


    def StillImage(self):

        self.DPanel.remove(self.image, DockPanel.CENTER)
        self.image = Image( self.DummyUrl + "images/" +str(DiceInstance)+".png")
        self.image.setSize("300px", "300px")
        self.DPanel.add(self.image, DockPanel.CENTER)
        self.DPanel.setCellHeight(self.image, "300px")
        self.DPanel.setCellWidth(self.image, "600px")
        RootPanel().add(self.DPanel)
        self.timer.cancel()
        if DiceInstance != 1: 
            self.TempBoard.setText(1, 1, DiceInstance + int(self.TempBoard.getText(1, 1))) 
            self.BankButton.setEnabled(True)
            self.RollButton.setEnabled(True)
        else:
            self.NameScore.getRowFormatter().removeStyleName(self.CountTurn,"Rows")
            self.RollButton.setEnabled(False)
            self.timerRButton.schedule(1500)
            self.CountTurn += 1
            if self.CountTurn % int(self.PlayerNum.getText()) == 1:
                self.CountTurn = 1
                self.TempBoard.setText(1,0,"Player"+str(self.CountTurn))
                self.TempBoard.setText(1, 1, "0")
                self.NameScore.getRowFormatter().addStyleName(self.CountTurn,"Rows");
            else:
                self.TempBoard.setText(1,0,"Player"+str(self.CountTurn))
                self.TempBoard.setText(1, 1, "0")
                self.NameScore.getRowFormatter().addStyleName(self.CountTurn,"Rows");
        

    def RollButtonPressed(self):
        global DiceInstance
        DiceInstance = random.randint(1, 6) # value turned after rolling the dice

        self.DPanel.remove(self.image, DockPanel.CENTER)
        self.image = Image("http://www.animatedimages.org/data/media/710/animated-dice-image-0064.gif")
        self.image.setSize("100px", "200px")
        self.DPanel.add(self.image, DockPanel.CENTER)
        self.DPanel.setCellHeight(self.image, "300px")
        self.DPanel.setCellWidth(self.image, "600px")
        RootPanel().add(self.DPanel)
        self.BankButton.setEnabled(False)
        self.RollButton.setEnabled(False)
        self.timer.schedule(3000)
           
    def BankButtonPressed(self):
        self.BankButton.setEnabled(False)
        self.NameScore.setText(self.CountTurn, 1,
            int(self.NameScore.getText(self.CountTurn, 1)) + int(self.TempBoard.getText(1,
            1)))
        if int(self.NameScore.getText(self.CountTurn, 1)) >= int(self.WinScore.getText()):
            AlrtTxt = "Congratulation!!! Player"+ str(self.CountTurn)  + " wins !!!!"
            Window.alert(AlrtTxt)

            self.DPanel.remove(self.image, DockPanel.CENTER)
            self.DPanel.add(self.TxtInstructions, DockPanel.CENTER)
            self.BankButton.setVisible(False)
            self.RollButton.setVisible(False)
            # self.image.setVisible(False)
            self.TempBoard.setVisible(False)
            self.NameScore.setVisible(False)

            i = int(self.PlayerNum.getText())
            while i > 0:
                self.NameScore. removeRow(i)
                i -= 1


            self.TempBoard.setText(1,0,"X")
            self.TempBoard.setText(1, 1, "0")
            self.StartButton.setEnabled(True)
            # self.OK.setEnabled(True)
            self.PlayerNum.setEnabled(True)
            self.WinScore.setEnabled(True)
            self.RollButton.setEnabled(False)
            self.BankButton.setEnabled(False)
            self.NameScore.getRowFormatter().removeStyleName(self.CountTurn,"Rows");




            self.DPanel.remove(self.image, DockPanel.CENTER)
            self.image = Image( self.DummyUrl + "images/0.png")
            self.image.setSize("200px", "300px")
            self.DPanel.add(self.image, DockPanel.CENTER)
            self.DPanel.setCellHeight(self.image, "200px")    
            self.DPanel.setCellWidth(self.image, "400px")




            RootPanel().add(self.DPanel)

        else:
            self.NameScore.getRowFormatter().removeStyleName(self.CountTurn,"Rows");
            self.CountTurn += 1
            if self.CountTurn % int(self.PlayerNum.getText()) == 1:
                self.CountTurn = 1
                self.TempBoard.setText(1,0,"Player"+str(self.CountTurn))
                self.TempBoard.setText(1, 1, "0")
                self.NameScore.getRowFormatter().addStyleName(self.CountTurn,"Rows");
            else:
                self.TempBoard.setText(1,0,"Player"+str(self.CountTurn))
                self.TempBoard.setText(1, 1, "0")
                self.NameScore.getRowFormatter().addStyleName(self.CountTurn,"Rows");

    def OnGameLoad(self):
        self.NameScore.setText(0, 0, "Player ID")
        self.NameScore.setText(0, 1, "Score")

        self.NameScore.setCellSpacing(10)       
        self.NameScore.setCellPadding(10)
        self.NameScore.setBorderWidth(2)
        self.NameScore.setVisible(False)

        self.TempBoard.setText(0, 0, "Player's Turn")
        self.TempBoard.setText(0, 1, "Temporary Score")
        self.TempBoard.setText(1, 0, "X")
        self.TempBoard.setText(1, 1, "0") 

        self.TempBoard.setCellSpacing(10)       
        self.TempBoard.setCellPadding(10)
        self.TempBoard.setBorderWidth(2)
        self.TempBoard.setVisible(False)


        #Adding StartButton to Dock panel
        self.DPanel.add(self.StartButton, DockPanel.EAST)

        self.DPanel.setCellHeight(self.StartButton, "200px")    
        self.DPanel.setCellWidth(self.StartButton, "20px") 

        #Adding playernumber and winscore textbox to Horizontal Panel
        Txt = HTML("<center><b>Enter Number of Players (between 2 & 6)</b><center>")
        Txt1 = HTML("<left><b>Enter Target Score (between 10 & 100)</b><left>")
        self.HPanel1.add(Txt)
        self.HPanel1.add(self.PlayerNum)

        self.HPanel1.add(Txt1)
        self.HPanel1.add(self.WinScore)
        self.HPanel1.add(self.StartButton)
        self.HPanel1.setSpacing(20)

        #Adding Horizontal panel containing playernumber and winscore textbox to Dock Panel
        self.DPanel.add(self.HPanel1, DockPanel.NORTH)
        self.DPanel.setCellHeight(self.HPanel1, "30px")    
        self.DPanel.setCellWidth(self.HPanel1, "2000px")

    

        self.TxtInstructions = HTML("<b><u><center>Instructions</center></u><ul><li>Pig is game for 2 to 6 Players.</li><li>Players take turns rolling a dice as many times as they like. </li><li>If a roll is 2, 3, 4, 5 or 6, the player adds that many points to their score for the turn. </li><li>A player may choose to end their turn at any time and 'bank' their points.</li><li>If a player rolls a 1, they lose all their unbanked points and their turn is over.</li><li>The first player to score the target or more wins.</li></ul></b>")
        self.TxtInstructions.setStyleName("TxtInstructions")
        #Adding Image to Dock Panel

        # self.image = Image( self.DummyUrl + "images/0.png")
        # self.image.setSize("200px", "300px")
        # self.image.setVisible(False)

        self.DPanel.add(self.TxtInstructions, DockPanel.CENTER)
        # self.DPanel.setCellHeight(self.image, "200px")    
        # self.DPanel.setCellWidth(self.image, "300px")

        #Adding main scoreboard to Dock Panel
        self.DPanel.add(self.NameScore, DockPanel.WEST)
        self.DPanel.setCellHeight(self.NameScore, "300px")    
        self.DPanel.setCellWidth(self.NameScore, "100px")

        self.DPanel.setSpacing(10)
        self.DPanel.setPadding(2)


        #Adding Tempboard and BankButton to Horizontal Panel
        self.HPanel.add(self.TempBoard)

        #Adding BankButton and RollButton to vertical panel
        self.VPanel.add(self.RollButton) 
        self.RollButton.setVisible(False)
        self.VPanel.add(self.BankButton) 
        self.BankButton.setVisible(False)    
        self.VPanel.setSpacing(10)
        #Adding Vertical panel containing BankButton and RollButton to Horizontal Panel
        self.HPanel.add(self.VPanel) 
        self.HPanel.setSpacing(40)
        #Adding Horizontal panel containing Tempboard and vertical panel containing BankButton and RollButton to Dock Panel
        self.DPanel.add(self.HPanel, DockPanel.SOUTH)
        self.DPanel.setCellHeight(self.HPanel, "20px")    
        self.DPanel.setCellWidth(self.HPanel, "2000px")



        RootPanel().add(self.DPanel)


if __name__ == "__main__":
    c = IntroPage()
    c.OnGameLoad()















