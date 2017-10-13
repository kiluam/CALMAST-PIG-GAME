/* start module: witgame */
$pyjs.loaded_modules['witgame'] = function (__mod_name__) {
	if($pyjs.loaded_modules['witgame'].__was_initialized__) return $pyjs.loaded_modules['witgame'];
	var $m = $pyjs.loaded_modules["witgame"];
	$m.__repr__ = function() { return "<module: witgame>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'witgame';
	$m.__name__ = __mod_name__;


	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', null, null, false);
	$m['random'] = $p['___import___']('random', null);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['DiceInstance'] = 0;
	$m['introPage'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'witgame';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.DPanel = $pyjs_kwargs_call(null, $m['DockPanel'], null, null, [{HorizontalAlignment:$p['getattr']($m['HasAlignment'], 'ALIGN_CENTER'), Spacing:10}]);
			self.VPanel = $m['VerticalPanel']();
			self.VPanel1 = $m['VerticalPanel']();
			self.HPanel = $m['HorizontalPanel']();
			self.HPanel1 = $m['HorizontalPanel']();
			self.image = $m['Image']();
			self.DummyUrl = self['image']['getUrl']();
			self.timer = $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:$p['getattr'](self, 'stillImage')}]);
			self.timerRButton = $pyjs_kwargs_call(null, $m['Timer'], null, null, [{notify:$p['getattr'](self, 'oneAlert')}]);
			self.RollButton = $m['Button']('Roll', $p['getattr'](self, 'rollButtonPressed'));
			self['RollButton']['setEnabled'](false);
			self.BankButton = $m['Button']('Bank', $p['getattr'](self, 'bankButtonPressed'));
			self['BankButton']['setEnabled'](false);
			self.StartButton = $m['Button']('Start', $p['getattr'](self, 'startButtonPressed'));
			self['StartButton']['setEnabled'](true);
			self.PlayerNum = $m['TextBox']();
			self.WinScore = $m['TextBox']();
			self['PlayerNum']['setText']('0');
			self['WinScore']['setText']('0');
			self.NameScore = $m['FlexTable']();
			self['NameScore']['setStyleName']('NameScore');
			self.TempBoard = $m['FlexTable']();
			self['TempBoard']['setStyleName']('TempBoard');
			self.VarTempScore = 0;
			self.VarTotScore = $p['list']([]);
			self.CountTurn = 1;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('startButtonPressed', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var i,$and1,$and3,$and4,VarPlayer,$add2,$add1,$add10,$add7,$add12,$add8,$add9,$and2,$add11;
			self.CountTurn = 1;
			if ($p['bool'](($p['bool']($and1=((($p['cmp']($p['float_int'](self['PlayerNum']['getText']()), 2))|1) == 1))?($p['bool']($and2=($p['cmp']($p['float_int'](self['PlayerNum']['getText']()), 6) < 1))?($p['bool']($and3=((($p['cmp']($p['float_int'](self['WinScore']['getText']()), 10))|1) == 1))?($p['cmp']($p['float_int'](self['WinScore']['getText']()), 100) < 1):$and3):$and2):$and1))) {
				self['StartButton']['setEnabled'](false);
				self['PlayerNum']['setEnabled'](false);
				self['WinScore']['setEnabled'](false);
				self['RollButton']['setEnabled'](true);
				self['TempBoard']['setText'](1, 0, $p['__op_add']($add1='Player',$add2=$p['str'](1)));
				self['TempBoard']['setText'](1, 1, '0');
				self['NameScore']['getRowFormatter']()['addStyleName']($p['getattr'](self, 'CountTurn'), 'Rows');
			}
			else {
				$m['Window']['alert']('Please Enter Correct Parameters ');
				return 0;
			}
			VarPlayer = function(){
				var $iter1_nextval,$iter1_type,i,$collcomp1,$iter1_iter,$add3,$add6,$iter1_idx,$add4,$add5,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = $p['xrange'](1, $p['__op_add']($add3=$p['float_int'](self['PlayerNum']['getText']()),$add4=1));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				i = $iter1_nextval.$nextval;
				$collcomp1['append']($p['__op_add']($add5='Player',$add6=$p['str'](i)));
			}

	return $collcomp1;}();
			i = 0;
			while ($p['bool'](($p['cmp'](i, $p['float_int'](self['PlayerNum']['getText']())) == -1))) {
				self['NameScore']['setText']($p['__op_add']($add7=i,$add8=1), 0, VarPlayer.__getitem__(i));
				self['NameScore']['setText']($p['__op_add']($add9=i,$add10=1), 1, '0');
				self['VarTotScore']['append'](0);
				i = $p['__op_add']($add11=i,$add12=1);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['startButtonPressed'] = $method;
		$method = $pyjs__bind_method2('oneAlert', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var AlrtTxt;
			AlrtTxt = ' Sorry, your turn is over';
			$m['Window']['alert'](AlrtTxt);
			self['timerRButton']['cancel']();
			self['RollButton']['setEnabled'](true);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['oneAlert'] = $method;
		$method = $pyjs__bind_method2('stillImage', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add21,$add20,$add22,$mod2,$add24,$add26,$add14,$add15,$add16,$add17,$mod1,$add13,$add25,$add18,$add19,$add23;
			self['DPanel']['remove']($p['getattr'](self, 'image'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self.image = $m['Image']($p['__op_add']($add17=$p['__op_add']($add15=$p['__op_add']($add13=$p['getattr'](self, 'DummyUrl'),$add14='images/'),$add16=$p['str']($m['DiceInstance'])),$add18='.png'));
			self['image']['setSize']('300px', '300px');
			self['DPanel']['add']($p['getattr'](self, 'image'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['DPanel']['setCellHeight']($p['getattr'](self, 'image'), '300px');
			self['DPanel']['setCellWidth']($p['getattr'](self, 'image'), '600px');
			$m['RootPanel']()['add']($p['getattr'](self, 'DPanel'));
			self['timer']['cancel']();
			if ($p['bool'](!$p['op_eq']($m['DiceInstance'], 1))) {
				self['TempBoard']['setText'](1, 1, $p['__op_add']($add19=$m['DiceInstance'],$add20=$p['float_int'](self['TempBoard']['getText'](1, 1))));
				self['BankButton']['setEnabled'](true);
				self['RollButton']['setEnabled'](true);
			}
			else {
				self['NameScore']['getRowFormatter']()['removeStyleName']($p['getattr'](self, 'CountTurn'), 'Rows');
				self['RollButton']['setEnabled'](false);
				self['timerRButton']['schedule'](1500);
				self.CountTurn = $p['__op_add']($add21=$p['getattr'](self, 'CountTurn'),$add22=1);
				if ($p['bool']($p['op_eq']((typeof ($mod1=$p['getattr'](self, 'CountTurn'))==typeof ($mod2=$p['float_int'](self['PlayerNum']['getText']())) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2)), 1))) {
					self.CountTurn = 1;
					self['TempBoard']['setText'](1, 0, $p['__op_add']($add23='Player',$add24=$p['str']($p['getattr'](self, 'CountTurn'))));
					self['TempBoard']['setText'](1, 1, '0');
					self['NameScore']['getRowFormatter']()['addStyleName']($p['getattr'](self, 'CountTurn'), 'Rows');
				}
				else {
					self['TempBoard']['setText'](1, 0, $p['__op_add']($add25='Player',$add26=$p['str']($p['getattr'](self, 'CountTurn'))));
					self['TempBoard']['setText'](1, 1, '0');
					self['NameScore']['getRowFormatter']()['addStyleName']($p['getattr'](self, 'CountTurn'), 'Rows');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['stillImage'] = $method;
		$method = $pyjs__bind_method2('rollButtonPressed', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['DiceInstance'] = $m['random']['randint'](1, 6);
			self['DPanel']['remove']($p['getattr'](self, 'image'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self.image = $m['Image']('http://www.animatedimages.org/data/media/710/animated-dice-image-0064.gif');
			self['image']['setSize']('100px', '200px');
			self['DPanel']['add']($p['getattr'](self, 'image'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['DPanel']['setCellHeight']($p['getattr'](self, 'image'), '300px');
			self['DPanel']['setCellWidth']($p['getattr'](self, 'image'), '600px');
			$m['RootPanel']()['add']($p['getattr'](self, 'DPanel'));
			self['BankButton']['setEnabled'](false);
			self['RollButton']['setEnabled'](false);
			self['timer']['schedule'](3000);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rollButtonPressed'] = $method;
		$method = $pyjs__bind_method2('bankButtonPressed', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add29,$add28,$add38,$add39,$mod4,$add32,$add33,$add31,AlrtTxt,$add37,$add27,$add35,i,$add34,$mod3,$sub2,$sub1,$add40,$add30,$add36;
			self['BankButton']['setEnabled'](false);
			self['NameScore']['setText']($p['getattr'](self, 'CountTurn'), 1, $p['__op_add']($add27=$p['float_int'](self['NameScore']['getText']($p['getattr'](self, 'CountTurn'), 1)),$add28=$p['float_int'](self['TempBoard']['getText'](1, 1))));
			if ($p['bool'](((($p['cmp']($p['float_int'](self['NameScore']['getText']($p['getattr'](self, 'CountTurn'), 1)), $p['float_int'](self['WinScore']['getText']())))|1) == 1))) {
				AlrtTxt = $p['__op_add']($add31=$p['__op_add']($add29='Congratulation!!! Player',$add30=$p['str']($p['getattr'](self, 'CountTurn'))),$add32=' wins !!!!');
				$m['Window']['alert'](AlrtTxt);
				i = $p['float_int'](self['PlayerNum']['getText']());
				while ($p['bool'](($p['cmp'](i, 0) == 1))) {
					self['NameScore']['removeRow'](i);
					i = $p['__op_sub']($sub1=i,$sub2=1);
				}
				self['TempBoard']['setText'](1, 0, 'X');
				self['TempBoard']['setText'](1, 1, '0');
				self['StartButton']['setEnabled'](true);
				self['PlayerNum']['setEnabled'](true);
				self['WinScore']['setEnabled'](true);
				self['RollButton']['setEnabled'](false);
				self['BankButton']['setEnabled'](false);
				self['NameScore']['getRowFormatter']()['removeStyleName']($p['getattr'](self, 'CountTurn'), 'Rows');
				self['DPanel']['remove']($p['getattr'](self, 'image'), $p['getattr']($m['DockPanel'], 'CENTER'));
				self.image = $m['Image']($p['__op_add']($add33=$p['getattr'](self, 'DummyUrl'),$add34='images/0.png'));
				self['image']['setSize']('200px', '300px');
				self['DPanel']['add']($p['getattr'](self, 'image'), $p['getattr']($m['DockPanel'], 'CENTER'));
				self['DPanel']['setCellHeight']($p['getattr'](self, 'image'), '200px');
				self['DPanel']['setCellWidth']($p['getattr'](self, 'image'), '400px');
				$m['RootPanel']()['add']($p['getattr'](self, 'DPanel'));
			}
			else {
				self['NameScore']['getRowFormatter']()['removeStyleName']($p['getattr'](self, 'CountTurn'), 'Rows');
				self.CountTurn = $p['__op_add']($add35=$p['getattr'](self, 'CountTurn'),$add36=1);
				if ($p['bool']($p['op_eq']((typeof ($mod3=$p['getattr'](self, 'CountTurn'))==typeof ($mod4=$p['float_int'](self['PlayerNum']['getText']())) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4)), 1))) {
					self.CountTurn = 1;
					self['TempBoard']['setText'](1, 0, $p['__op_add']($add37='Player',$add38=$p['str']($p['getattr'](self, 'CountTurn'))));
					self['TempBoard']['setText'](1, 1, '0');
					self['NameScore']['getRowFormatter']()['addStyleName']($p['getattr'](self, 'CountTurn'), 'Rows');
				}
				else {
					self['TempBoard']['setText'](1, 0, $p['__op_add']($add39='Player',$add40=$p['str']($p['getattr'](self, 'CountTurn'))));
					self['TempBoard']['setText'](1, 1, '0');
					self['NameScore']['getRowFormatter']()['addStyleName']($p['getattr'](self, 'CountTurn'), 'Rows');
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['bankButtonPressed'] = $method;
		$method = $pyjs__bind_method2('onGameLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var Txt,Txt1,$add41,$add42;
			self['NameScore']['setText'](0, 0, 'Player ID');
			self['NameScore']['setText'](0, 1, 'Score');
			self['NameScore']['setCellSpacing'](10);
			self['NameScore']['setCellPadding'](10);
			self['NameScore']['setBorderWidth'](2);
			self['TempBoard']['setText'](0, 0, "Player's Turn");
			self['TempBoard']['setText'](0, 1, 'Temporary Score');
			self['TempBoard']['setText'](1, 0, 'X');
			self['TempBoard']['setText'](1, 1, '0');
			self['TempBoard']['setCellSpacing'](10);
			self['TempBoard']['setCellPadding'](10);
			self['TempBoard']['setBorderWidth'](2);
			self['DPanel']['add']($p['getattr'](self, 'StartButton'), $p['getattr']($m['DockPanel'], 'EAST'));
			self['DPanel']['setCellHeight']($p['getattr'](self, 'StartButton'), '200px');
			self['DPanel']['setCellWidth']($p['getattr'](self, 'StartButton'), '20px');
			Txt = $m['HTML']('<center><b>Enter Number of Players (between 2 & 6)</b><center>');
			Txt1 = $m['HTML']('<left><b>Enter Target Score (between 10 & 100)</b><left>');
			self['HPanel1']['add'](Txt);
			self['HPanel1']['add']($p['getattr'](self, 'PlayerNum'));
			self['HPanel1']['add'](Txt1);
			self['HPanel1']['add']($p['getattr'](self, 'WinScore'));
			self['HPanel1']['add']($p['getattr'](self, 'StartButton'));
			self['HPanel1']['setSpacing'](20);
			self['DPanel']['add']($p['getattr'](self, 'HPanel1'), $p['getattr']($m['DockPanel'], 'NORTH'));
			self['DPanel']['setCellHeight']($p['getattr'](self, 'HPanel1'), '30px');
			self['DPanel']['setCellWidth']($p['getattr'](self, 'HPanel1'), '2000px');
			self.image = $m['Image']($p['__op_add']($add41=$p['getattr'](self, 'DummyUrl'),$add42='images/0.png'));
			self['image']['setSize']('200px', '300px');
			self['DPanel']['add']($p['getattr'](self, 'image'), $p['getattr']($m['DockPanel'], 'CENTER'));
			self['DPanel']['setCellHeight']($p['getattr'](self, 'image'), '200px');
			self['DPanel']['setCellWidth']($p['getattr'](self, 'image'), '300px');
			self['DPanel']['add']($p['getattr'](self, 'NameScore'), $p['getattr']($m['DockPanel'], 'WEST'));
			self['DPanel']['setCellHeight']($p['getattr'](self, 'NameScore'), '300px');
			self['DPanel']['setCellWidth']($p['getattr'](self, 'NameScore'), '100px');
			self['DPanel']['setSpacing'](10);
			self['DPanel']['setPadding'](2);
			self['HPanel']['add']($p['getattr'](self, 'TempBoard'));
			self['VPanel']['add']($p['getattr'](self, 'RollButton'));
			self['VPanel']['add']($p['getattr'](self, 'BankButton'));
			self['VPanel']['setSpacing'](10);
			self['HPanel']['add']($p['getattr'](self, 'VPanel'));
			self['HPanel']['setSpacing'](40);
			self['DPanel']['add']($p['getattr'](self, 'HPanel'), $p['getattr']($m['DockPanel'], 'SOUTH'));
			self['DPanel']['setCellHeight']($p['getattr'](self, 'HPanel'), '20px');
			self['DPanel']['setCellWidth']($p['getattr'](self, 'HPanel'), '2000px');
			$m['RootPanel']()['add']($p['getattr'](self, 'DPanel'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onGameLoad'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('introPage', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['c'] = $m['introPage']();
		$m['c']['onGameLoad']();
	}
	return this;
}; /* end witgame */


/* end module: witgame */


/*
PYJS_DEPS: ['pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.Window', 'pyjamas.ui.HasAlignment', 'pyjamas.Canvas.Color', 'pyjamas.Canvas', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'random', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.Timer.Timer', 'pyjamas.Timer']
*/
